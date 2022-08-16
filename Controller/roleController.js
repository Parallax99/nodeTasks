const roleModel = require("../Model/roleModel")
function addRole(req,res){
    let role = new roleModel({
        roleName:req.body.roleName
    })
    // Boolean check = roleModel.fi
    // if(check)
    role.save(function(err,data){
        if(err){
            console.log("err in addRole"+err);
            res.json({
                Status:-1,
                Data:req.body,
                msg:"role couldn't be added"
            })
        }else{
            res.json({
                Status:200,
                Data:data,
                msg:"Role Added"
            })
        }
    })
}
function getAllRoles(req,res){
    roleModel.find(function(err,data){
        if(err){
            res.json({
                Status:-1,
                msg:"Error in Getting Roles"
            })
        }else{
            res.json(
                {
                    Status:200,
                    msg:"List of Roles Retrieved",
                    Data:data
                }
            )
        }
    })
}
function deleteRole(req,res){
    roleModel.findByIdAndDelete({_id:req.params.roleId},function(err,data){
        if(err){
            res.json(
                {
                    Status:-1,
                    Data:err,
                    msg:"Couldn't DeleteRole"
                }
            )
        }else{
            if(data==null){
                res.json({
                    Status:0,
                    msg:"Invalid RoleId",
                    Data:req.params.roleId
                })
            }else{
                res.json({
                    Status:200,
                    msg:"Role Deleted",
                    Data:data
                })
            }
        }
    })
}
function findRoleById(req,res){
    roleModel.findById({_id:req.params.roleId},function(err,data){
        if(err){
            res.json({
                Status:-1,
                msg:"Error in Finding Role",
                Data:err
            })
        }else{
            if(data==null){
                res.json({
                    Status:0,
                    msg:"Invalid RoleId",
                    Data:req.params.roleId
                })
            }else{
                res.json({
                    Status:200,
                    msg:"Role Found",
                    Data:data
                })
            }        
        }
    })
}
function updateRole(req,res){
    roleModel.findByIdAndUpdate({_id: req.body.roleId }, { roleName: req.body.roleName},function(err,data){
        if(err){
            res.json({
                Status:-1,
                msg:"Couldn't Update Role",
                Data:err
            })
        }else{
            if(data==null){
                res.json({
                    Status:0,
                    msg:"Invalid roleId",
                    Data:data
                })
            }else{
                res.json({
                    Status:200,
                    msg:"Updated Role",
                    Data:req.body.roleName
                })
            }
        }
    })
}
module.exports.addRole = addRole
module.exports.getAllRoles = getAllRoles
module.exports.deleteRole = deleteRole
module.exports.findRoleById = findRoleById
module.exports.updateRole = updateRole