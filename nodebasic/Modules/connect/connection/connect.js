const mongoose = require('mongoose')

const connectToMomgoDb = async (url)=>{
    return mongoose.connect(url)
}

module.exports = {
    connectToMomgoDb
}