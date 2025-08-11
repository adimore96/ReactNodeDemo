const conn = require("../config/db/db");

exports.addDepartment = async(deptName) =>{
       let row =  (await conn).query("insert into department values('0',?)",[deptName]);
       // console.log("Inside Model\n\n");
       // console.log(row);
       // console.log("Inside Model\n\n");
       return row;
      
}