"use strict";

const express = require("express");
const home = require("./src/routes/home");
// const helmet = require('helmet');

const app = express();

// app.use(
//     helmet({ contentSecurityPolicy: false,
//             crossOriginEmbedderPolicy: false,
//             crossOriginResourcePolicy: false }),
// );

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); // use -> 미들웨어를 등록해 주는 메서드

module.exports = app;
