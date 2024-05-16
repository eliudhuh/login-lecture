"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

    
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
            body: JSON.stringify(req),
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
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