const express = require ("express")
const connectToDb = require("./config/dbConfig")
const authRouter = require("./routes/authRoutes")
const morgan = require("morgan")
const { notFound, errorHandler } = require("./middlewares/handleErrors")
require("dotenv").config()


//initialize express 
const app = express()
connectToDb()
//ports
const PORT = process.env.PORT || 4789

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))
//api routes
app.use("/api/v1/auth", authRouter)

//Error handling
app.use(notFound)
app.use(errorHandler)




app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`)
})












































/*var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello World !');
}).listen(8081)

console.log("Server running ar https://localhost:8081")*/
