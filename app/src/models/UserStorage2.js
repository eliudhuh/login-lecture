"use strict";

const { json } = require("body-parser");

const fs =require("fs").promises;

class UserStorage{
    // static 로 선언하면 다른 파일에서 UserStorage에 users로 바로 접근가능
    // #users 다른 파일에서 바로 불러올 수 없도록 처리


    static getUsers(isAll,...fields){
        return fs.readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUsers(data,isAll, fields);
        })
        .catch(console.error)
    }
    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            // console.log("newUsers =>",newUsers)  //Check
            return newUsers;                     // >>> User.js
        },{});
        console.log("userInfo =>",newUsers)      //Check
        return newUsers;
    }

    static getUserInfo(id){
        // const users = this.#users;
        return fs.readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUserInfo(data, id);
        })
        .catch(console.error)
    }
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);       // 위치를 반환한다.
        const userKeys = Object.keys(users)     // {[a.b]} => [a,b]
        console.log("idx => ",idx);             // Check
        console.log("Object.keys(users) => ",userKeys); // Check
        const userInfo = userKeys.reduce((newUsers, info)=>{
            newUsers[info] = users[info][idx];  
            console.log("newUsers =>",newUsers)  //Check
            return newUsers;                     // >>> User.js
        },{});
        console.log("userInfo =>",userInfo)      //Check
        return userInfo;
    }

    static async save(userInfo){
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "같은 아이디가 존제 합니다.";
        }
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);

        console.log("userStorage.js save =>",users)
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success: true}
    }

}

module.exports=UserStorage;