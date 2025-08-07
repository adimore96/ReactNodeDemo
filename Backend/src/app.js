const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./config/db/db");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


module.exports = app;