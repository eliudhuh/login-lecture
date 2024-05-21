"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");    
    loginBtn.addEventListener("click", login);
    
    function login(){
        const req = {
            id : id.value,
            psword : psword.value,
        }
        // console.log(req);
        // console.log(JSON.stringify(req));
        fetch("/login",{
            method : "POST",
            headers:{
                "content-Type": "application/json"
                    },
            body: JSON.stringify(req), // req를 문자열로 변경 {"id":"","psword":""}
            })
            .then((res) => res.json())
            .then((res) => {
                console.log("login.js res =>",res)  // Check
                if(res.success){
                    location.href = "/"

                }else{
                    alert(res.message)
                }
            })
            .catch((error) =>{
                console.error(error);
            })
    
}