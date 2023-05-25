const express = require("express");

const APP = express();
const PORT = "8800";

APP.use("/", (req, res) => {
  res.send("Working to Express Server!");
});
//Express Server Startup
APP.listen(PORT, () => {
  console.log("1. Server has started");
});
