const express = require("express")
const {isLogged, isAdmin } = require("../middlewares/authMiddleware")
const { getAllUsers
    // , createUser
 } = require("../controllers/userController")
// const upload = require("../middlewares/uploadMiddleware")
const userRouter = express.Router()



userRouter.get("/users", getAllUsers)
// userRouter.post("/users",isLogged, isAdmin, createUser)
// userRouter.post("/users/upload",isLogged, isAdmin,upload.single('image'), uploadImage)




module.exports= userRouter