"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

    
    registerBtn.addEventListener("click", register);
    
    function register(){
        const req = {
            id : id.value,
            name: name.value,
            psword : psword.value,
            confirPsword : confirmPsword.value,
        }
        console.log(req);                       //Check
        // console.log(JSON.stringify(req));    //Check
        fetch("/register",{
            method : "POST",
            headers:{
                "content-Type": "application/json"
                    },
            body: JSON.stringify(req), 
            })
            .then((res) => res.json())
            .then((res) => {
                console.log("register.js res =>",res)  // Check
                if(res.success){
                    location.href = "/login"
                }else{
                    alert(res.message)
                }
            })
            .catch((error) =>{
                console.error(error);
            })
    
}