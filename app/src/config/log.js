const fs = require("fs");
const appRoot = require("app-root-path"); //루트에 대한 위치를 알려줌

const accessLogStream = fs.createWriteStream(`${appRoot}/log/access.log`,{fldgs:"a"});

module.exports = accessLogStream;
