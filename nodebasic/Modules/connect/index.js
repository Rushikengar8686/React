// import package mongose
const mongoose = require('mongoose')

// To define Schemaa
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type: String
    },
    phoneNo:{
        type:Number,
        required: true,
        unique: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    }
})
// now next step to create model (mongoDb DbName)
const userModel = mongoose.model("User",userSchema) // User collections Name

// now to connect mongoose to mongoDb
mongoose.connect('mongodb://127.0.0.1:27017/userModel')
.then(()=> console.log("MongoDb Connected.."))
.catch((err)=>console.log(err))



 module.exports = userModel;