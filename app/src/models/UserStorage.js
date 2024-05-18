"use strict";

class UserStorage{
    // static 로 선언하면 다른 파일에서 UserStorage에 users로 바로 접근가능
    // #users 다른 파일에서 바로 불러올 수 없도록 처리
    static #users = {
        id:["woorimIT","나개발","김팀장","dk21"],
        psword:["1234","1234","123456","dk21"],
        name:["유림이", "고니","평경장","아귀"]
    };

    static getUser(...fields){
        const users = this.#users;
        // reduce(누적, 요청함수 값을 수서대로 받음)
        const newUsers = fields.reduce((newUsers, field) =>{
            console.log(newUsers, field);         //Check
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers;
        },{}); //",{}"로 객체선원 한 듯 합니다.
        console.log(newUsers)
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
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
}

module.exports=UserStorage;