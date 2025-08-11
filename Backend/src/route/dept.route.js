const express = require("express");

const route = express.Router();
const prodController = require("../contorller/dept.controller");

route.get("/",(req,res)=>{
    res.send("<center><h1>Product Route</h1></center>");
});

route.post("/addProduct",prodController.addDepartment);



module.exports = route;