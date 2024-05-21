"use strict";
const db = require("../config/db")
const { json } = require("body-parser");



class UserStorage{
    // static 로 선언하면 다른 파일에서 UserStorage에 users로 바로 접근가능
    // #users 다른 파일에서 바로 불러올 수 없도록 처리
    static getUsers(isAll,...fields){

    }

    static getUserInfo(id){
        return new Promise((resolve, reject)=>{
            const query = "select * from users where id = ? ;";
            db.query(query, [id], (err, data) => {
                if(err) reject(`${err}`);                          //error시 object를 보내줘서 값으로 변경하기 위하여 `${err}`로 사용함
                console.log("UserStorage_getUserInfo=>", data[0]);  //Check
                resolve(data[0]);     // [{data}] >>> {data}하기 위해 data[0]지정
            })

        })
        

    }

    static async save(userInfo){
        return new Promise((resolve, reject)=>{
            const query = "insert into users(id,name,psword) values(?,?,?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err, data) => {
                if(err) reject(`${err}`);
                resolve({success:true});
            })

        })
        
    }

}

module.exports=UserStorage;


