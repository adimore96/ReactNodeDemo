const express = require("express");

const route = express.Router();

route.get("/",(req,res)=>{
    res.send("<center><h1>Product Route</h1></center>");
})


module.exports = route;