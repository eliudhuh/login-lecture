"use strict";

const User = require("../../models/User")


const output = {
    home:(req,res)=>{
        res.render("home/index");
    },
    
    login :(req,res)=>{
        res.render("home/login");
    },
    register : (req, res) =>{
        res.render("home/register")
    }
};

const process = {
    login :(req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log("home.ctrl login response =>",response); //Check
        return res.json(response);   // >>>login.js
    },

    register : (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        console.log("home.ctrl register response =>",response); //Check
        return res.json(response);   // >>>register.js
    }
};


module.exports={
    output, process,
}