const express = require("express")
const {register, login,fetchUsers} = require("../controllers/authController")
const authRouter = express.Router()


authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.get("/users",fetchUsers)

module.exports = authRouter