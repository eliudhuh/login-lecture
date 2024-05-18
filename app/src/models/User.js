"use strict"
const UserStorage = require("../../src/models/UserStorage")

class User{
    constructor(body){          //class가 값을 받았을 때 User("id")를 받았을 때 "id"를 넘기기 위한 함수
        this.body = body;
    }

    login(){
        const body = this.body;
        const {id,psword } = UserStorage.getUserInfo(body.id);
        
        if(id){
            if(id===body.id && psword === body.psword){
                return {success: true};                      // >>> home.ctrl,js
            }
            return {success: false, message: "비밀번호가  틀렸습니다."};            
        }
        return {success: false, message: "ID가 존제하지 않습니다."};
    }
}

module.exports = User;