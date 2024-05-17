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
        // reduce ??
        const newUsers = fields.reduce((newUsers, field) =>{
            console.log(newUsers, field);
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers;
        },{});  //",{}"로 객체선원 한 듯 합니다.
        console.log(newUsers)
        return newUsers;
    }
}


UserStorage.getUser("id","psword","name");
// module.exports=UserStorage;