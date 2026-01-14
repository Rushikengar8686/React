const express = require("express")
const fs = require("fs")
//load Data Set
const data = require('./MOCK_DATA.json')
const { json } = require("stream/consumers")
const app = express()
const Port = 3000

// to Get Data
app.get("/api/user",(req,res)=>{
    return res.json(data)
})

// This lin eof perpose is to convert data to json format
// its MiddleWare
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// To Create New Data
app.post("/api/user", (req, res) => {
    const body = req.body;

    const newUser = { ...body, id: data.length + 1 };
    data.push(newUser);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
        if (err) {
            return res.json({ status: "Error", message: "Failed to save user" });
        }

        return res.json({
            status: "Success",
            id: newUser.id
        });
    });
});

// to find User by using id
// app.get("/api/user/:id",(req,res)=>{
//     const ReqId = Number(req.params.id)
//     const findUser = data.find(uesr=> uesr.id === ReqId)
//     console.log(findUser)
//     return res.json(findUser)
// });

// Edit user by using  id
// app.patch("/api/user/:id",(req,res)=>{
//     // Edit pending
//     return res.json()
// })

// Delete user by using id
// app.delete("/api/user/:id",(req,res)=>{
//     // Delete Pending
// })


// now we can reduce your code by using Route
// what will comman of this three api method
// /api/user/:id

app.route("/api/user/:id").get((req,res)=>{
    const id = Number(req.params.id)
    const findUser = data.find((user)=> user.id === id)
    if(!findUser){
        return res.json({message:"User not found"})
    }
    return res.json(findUser)
})
.put((req,res)=>{
    const id = Number(req.params.id)
    const editUser = data.findIndex((userId)=> userId.id === id)

    if(editUser === -1){
        return res.json({message:"User Not Found"})
    }

    data[editUser] = {...data[editUser],...req.body}

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data,null,2),err =>{
        if(err){
            return res.json({message:"Update Failed"})
        }
        return res.json({status:"User Updated",user:data[editUser]})
    })
})
.delete((req,res)=>{
    const id = Number(req.params.id)
    const deleteUser = data.findIndex((userid)=>{
         return userid.id === id 
    })
    
    if(deleteUser === -1){
        return res.json({message:"User Not Found"})
    }

    data.splice(deleteUser,1)
    
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data,null,2), err=>{
    
        if(err){
            return res.json({message:" Delete Failed"})
        }
        return res.json({message:"User Delete Success"})
    })
})

// 
app.listen(Port, ()=> console.log("Server Runing on this port http:/localhost:",Port))