const express = require('express')
const Router = require("./Router/router")
const {connectToMomgoDb} = require("./connection/connect")

const app = express()

// middleware plugin
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//connections
connectToMomgoDb('mongodb://127.0.0.1:27017/userModel').then(()=> console.log("MongoDb Connect")).catch((err)=> console.log(err))

// Routers
app.use("/user",Router)
app.listen(8000,()=>console.log("Server Runing",8000))