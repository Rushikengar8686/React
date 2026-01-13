// to Import express Fremwork
const express = require('express')

// to Create App
const app = express()

// which port we have to run this project
const PORT = 3000;

app.get("/",(req,res)=>{
    return res.send(`<h1>This is a Home Page</h1>`)
})
app.get("/About",(req,res)=>{
    return res.send(`<h1>This is a About Page</h1>`)
})

app.listen(PORT,()=>{
    console.log(`Server Runing... http:/localhost:${PORT}`)
})