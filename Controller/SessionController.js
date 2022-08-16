const userModel = require("../Model/userModel")
function login(req, res) {
   userModel.findOne({email:req.body.email,password:req.body.password},function(err,data){
    if(data==null){
        res.json({
            Status:-1,
            msg:"Invalid Credentials",
            data:req.body
        })
    }else{
        res.json({
            status:200,
            msg:"Looged In",
            Data:data
        })
    }
   })
}

function signup(req, res) {
    res.end("signup")
}

module.exports.login = login
module.exports.signup = signup