const mysql = require("mysql2/promise");

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

conn.then((result)=>{
    console.log("DB Connected: ");
    
})
.catch((err)=>{
    console.log(`DB not Connected: `);
})

module.exports = conn;