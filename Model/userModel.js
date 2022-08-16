const mongoose = require("mongoose")
var UserSchema = new mongoose.Schema(
    {
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        role:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"role"
        }
    }
)
module.exports = mongoose.model("user",UserSchema)