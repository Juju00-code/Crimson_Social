const asyncHandler = require("express-async-handler")
const User = require("../models/userModel.js")

//handling errors

exports.register = asyncHandler(async(req,res,next) => {
    const fullname = req.body.firstname  + " " + req.body.lastname
   try{
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        fullname,

    })
   }catch(error){
        next(error)
   }
})

exports.login = asyncHandler(async(req,res) => {
    res.status(200).json({message : "You have successfully logged in"})
})

exports.fetchUsers = asyncHandler(async(req,res) => {
    //const users = await User.find()
    //res.status(200).json({users})
    const users = await User.find()
    res.status(200).json({users})
})

//Other ways to export functions

