const express = require("express");
const app = express();
require("dotenv").config();


const db = require("./config/db/db");
const prodRoute = require("./route/dept.route");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.send(`<center><h2>Server Started :) on ${process.env.port} port🔥!!!</h2></center>`);
});

app.use("/product",prodRoute);


module.exports = app;