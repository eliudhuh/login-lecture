const mysql =require("mysql2");


const db = mysql.createConnection({
    
    // host : `${process.env.DB_HOST}`,   
    // user: `${process.env.DB_USER}`,
    // password : `${process.env.DB_PSWORD}`,
    // database : `${process.env.DB_DATABASE}`,

    host : process.env.DB_HOST,
    user: "root",
    password : "se5575",
    database : "login_lecture",  

    // host :process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password :process.env.DB_PSWORD,
    // database :process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 30,
    // queueLimit: 0,


});

db.connect();

module.exports = db;