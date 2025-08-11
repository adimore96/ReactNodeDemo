const deptModel = require("../models/dept.model");

exports.addDepartment = (req,res) =>{
    let deptName = req.body.deptName;
    console.log(deptName);
    deptModel.addDepartment(deptName)
    .then((result)=>{
        if(result[0].affectedRows>0){
            res.status(201).json({message:"Dept Added successfully :)"});
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(409).json({message:"Duplicate product entry :("});
    })
    
}