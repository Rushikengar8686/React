const userModel = require("../model/UserModel")

// Get All Users
const handelGetAllUSers = async (req,res)=>{
    const getAllUsers = await userModel.find({})
    if(!getAllUsers){
        return res.status(404).json({messagae:"User Found"})
    }
    return res.json(getAllUsers)
}

// find All User By using Id
const handelGetAllUSersById = async (req,res)=>{
    const findUser = await userModel.findById(req.params.id)
    if(!findUser){
       return res.status(404).json({messagae:"User not Found"})
    }
    return res.json(findUser)
}
// Delete User
const handleDeleteGetAllUserById = async (req,res)=>{
    const deleteUser = await userModel.findByIdAndDelete(req.params.id)
    if(!deleteUser){
        return res.status(404).json({messagae:"User not Deleted"})
    }
    return res.json({messagae:"User Delete Success",user:deleteUser._id})
}

// update users
const handleUpdateGetAllUserById = async (req,res)=>{
    const deleteUser = await userModel.findByIdAndUpdate(req.params.id)
    if(!deleteUser){
        return res.status(404).json({messagae:"User not Updated"},{lastName:"Jadhav"})
    }
    return res.json({messagae:"User Update Success",user:deleteUser._id})
}

// Create New Users

const handleCreateNewUser = async(req,res)=>{
    const body = req.body
    if(!body || !body.firstName || !body.lastName || !body.phoneNo || !body.Email){
        return res.status(404).json({messagae:"All Field Are Requied"})
    }
    const result = await userModel.create({
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNo: body.phoneNo,
        Email: body.Email
    })
    return res.status(201).json({messagae:"User Create Success", id:result._id})
}


module.exports = {
    handelGetAllUSers,
    handelGetAllUSersById,
    handleDeleteGetAllUserById,
    handleUpdateGetAllUserById,
    handleCreateNewUser
}  