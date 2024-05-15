"use strict";

const express = require("express");
const home = require("./routes/home")

const app = express();

app.set("views","./views")
app.set("view engine","ejs")

app.use("/", home);  // use -> 미들웨어를 등록해 주는 메서드


module.exports = app;

