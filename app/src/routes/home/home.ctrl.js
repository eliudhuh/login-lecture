"use strict";

const User = require("../../models/User")


const output = {
    home:(req,res)=>{
        res.render("home/index");
    },
    
    login :(req,res)=>{
        res.render("home/login");
    },
};

const process = {
    login :(req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log("home.ctrl.js response =>",response);
        return res.json(response);   // >>>login.js
    },
};


module.exports={
    output, process,
}