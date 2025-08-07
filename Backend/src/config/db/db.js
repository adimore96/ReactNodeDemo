const mysql = require("mysql2");

const host = process.env.host;
const user = process.env.user;
const pass = process.env.pass;
const dbname = process.env.dbname;

// console.log(host,user,pass,dbname);

const conn = mysql.createConnection({
    host,
    user,
    password:pass,
    database:dbname
});

conn.connect((err)=>{
    if(err){
        console.log(`DB not Connected`);
    }else{
        console.log(`DB Connected :)`);
    }
});

module.exports = conn;