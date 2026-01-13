const path = require('./Serivec.js')
const http = require('http')

// Run on this port
const hostname = "localhost"
const PORT = 3000

// To create Server using http modules

const createserver = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`<h1>Addition of two Number ${path.SumOfTwo}</h1>`)
    }else if(req.url === "/Sub"){
        res.end(`<h1>Subtractions of two number ${path.subtractionsOfTwo}</h1>`)
    }else if(req.url === "/mul"){
        res.end(`<h1>MultiPlication of two number:: ${path.MultiPlications}</h1>`)
    }else if(req.url === "/div"){
        res.end(`<h1>Division of two number :: ${path.Division}</h1>`)
    }
    else{
        res.end(`<h1>404 Url not Found</h1>`)
    }
})

// server Run on this Port Like http://localhost:3000

createserver.listen(PORT,hostname , ()=>{
    console.log(`Server Run on this Port : http://${hostname}:${PORT}`)
})



