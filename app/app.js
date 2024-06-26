"use strict";

const express = require("express");
const home = require("./src/routes/home");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");  //환경변주 정의
const morgan = require("morgan");
const accessLogStream = require("./src/config/log")
// const helmet = require('helmet');
const app = express();
dotenv.config();

// app.use(
//     helmet({ contentSecurityPolicy: false,
//             crossOriginEmbedderPolicy: false,
//             crossOriginResourcePolicy: false }),
// );


app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같음 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));     //Check
app.use(morgan("common",{stream: accessLogStream}));

app.use("/", home); // use -> 미들웨어를 등록해 주는 메서드

module.exports = app;
