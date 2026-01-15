// load the Data Set
const data = require("./MOCK_DATA.json")
// To import express modules
const express  = require("express")
// import fs module
const fs = require("fs")
// now create Port 
const PORT = 4000
// create app
const app = express()

// Add MidelWare 
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// call Get AllEmployee

app.get("/api/getAllEmp",(req,res)=>{
    return res.json(data)
})


// GetAllEmpByID

app.get("/api/getAllEmpBy/:id",(req,res)=>{
    const reqID =Number(req.params.id)
    const findEmp = data.find((user)=> user.empId === reqID)
    if(!findEmp){
        return res.json({message:"User Not Found"})
    }
    return res.json(findEmp)
})

// To Edit employee Details
app.put("/api/getEmpByid/:id",(req,res)=>{
    const reqID = Number(req.params.id)
    const editEmp = data.findIndex((user)=> user.empId === reqID)
    if(editEmp === -1){
        return res.json({message:"Employee Not Found"})
    }
    data[editEmp] = {...data[editEmp],...req.body}
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data,null, 2),(err)=>{
        if(err){
            return res.json({message:"Employee Not Update"})
        }
        return res.json({message:"Employee Update Success", user:data[editEmp]})
    })
})  

// to Delete Employee

app.delete("/api/deleteEmpId/:id",(req,res)=>{
    const reqID = Number(req.params.id)
    const deleteEmp = data.findIndex((user)=> user.empId === reqID)
    if(deleteEmp === -1){
        return res.json({message:"Employee Not Found"})
    }
    data.splice(deleteEmp,1)
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data,null,2),(err)=>{
        if(err){
            return res.json({message:"Employee Not Deleted..."})
        }
        res.json({message:"Employee Delete Success"})
    })
})



app.listen(PORT,()=>console.log(`Server run on this port`,PORT))
