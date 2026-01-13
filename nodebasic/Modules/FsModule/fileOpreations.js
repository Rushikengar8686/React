// TO import File Modules
const fs = require("fs")

// now to Create One text file in Sync Way
fs.writeFileSync("./Demo.txt","Hello Rushi Welcome to Demo Text file2")

// now to Create File in async Way
// what will to 
// Async Way always accept Callback function
fs.writeFile("DemoOne.txt","Its Demo two file",(err)=>{
    if(err){
        console.log(err)
    }
})

// To Read file in Sync Way
const result = fs.readFileSync("./Demo.txt","utf-8")
console.log(result)

// now Also Read file in Async Way
fs.readFile("./DemoOne.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})