"use strict"
const UserStorage = require("../../src/models/UserStorage")

class User{
    constructor(body){          //class가 값을 받았을 때 User("id")를 받았을 때 "id"를 넘기기 위한 함수
        this.body = body;
    }

    login(){
        const client = this.body;
        const {id,psword } = UserStorage.getUserInfo(client.id);
        
        if(id){
            if(id===client.id && psword === client.psword){
                return {success: true};                      // >>> home.ctrl,js
            }
            return {success: false, message: "비밀번호가  틀렸습니다."};            
        }
        return {success: false, message: "ID가 존제하지 않습니다."};
    }
    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
        
    }
}

module.exports = User;