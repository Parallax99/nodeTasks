const express = require("express")
const mongoose = require('mongoose')
var sessionController = require("./Controller/SessionController")
const roleController = require("./Controller/roleController")
const userController = require("./Controller/userController")
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.end("Welcome");
})
app.post("/login",sessionController.login)
app.post("/signup",sessionController.signup)
app.post("/role",roleController.addRole)
app.get("/getrole",roleController.getAllRoles)
app.get("/findrole/:roleId",roleController.findRoleById)
app.delete("/delrole/:roleId",roleController.deleteRole)
app.put("/updateRole",roleController.updateRole)
// app.put("/role",roleController.updatRole)
app.post("/addUser",userController.addUser)
app.get("/getUsers",userController.getAllUser)

let x = app.listen(9090,function(){
    console.log("server started on 9090 ");
})
 
let dbUrl = "mongodb://localhost:27017/ism2022"

mongoose.connect(dbUrl,function(err){
    if(err){
        console.log("db not connected");
    }else{
        console.log("db connected...");
    }
})