"use strict";
const bin = require("../app");

const PORT = process.env.PORT || 3000;

bin.listen(PORT, () => {
  console.log("Server start!!");
});
