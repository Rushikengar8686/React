const mongoose = require('mongoose')

//Now Create USerSchema

const UserSchema =  new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        
    },
    lastName :{
        type: String,
        required:true
    },
    phoneNo:{
        type: Number,
        required: true,
        unique:true
    },
    Email:{
        type: String,
        required: true,
        unique:true
    }
})

// create Model
const userModel = mongoose.model("users",UserSchema)

module.exports = userModel
