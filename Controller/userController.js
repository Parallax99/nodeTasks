const userModel = require("../Model/userModel")
module.exports.addUser = function addUser(req,res){
    let user = new userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        role:"62fb293738d4cecd6c2207fd"
    })
    user.save(function(err,data){
        if(err){
            res.json({
                Status:-1,
                msg:"Couldn't addUser"
            })
        }else{
           res.json({
            Status:200,
            msg:"User Added",
            Data:data
           })
        }
    })
}
module.exports.getAllUser = function(req,res){
    userModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({
                Status:-1,
                msg:"Couldn't get Users",
                Data:err
            })
        }else{
            res.json({
                Status:200,
                msg:"Users",
                Data:data
            })
        }
    })
}