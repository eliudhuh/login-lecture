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
    login :async (req, res) => {
        const user = new User(req.body);
        const response =await user.login();
        console.log("home.ctrl login response =>",response); //Check
        return res.json(response);   // >>>login.js
    },

    register : async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        console.log("home.ctrl register response =>",response); //Check
        return res.json(response);   // >>>register.js
    }
};


module.exports={
    output, process,
}