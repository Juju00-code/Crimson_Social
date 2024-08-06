const mongoose = require("mongoose")

const connectToDb = async()=>{
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to mongodb.......")
    }catch(err){
        console.log("Connections to mongodb failed")
        console.log({err})
    }
}


module.exports = connectToDb