const express = require("express")
const { singnup, login, logout } = require("../controllers/authController")
const validateMiddelware = require("../middlewares/validatorMiddlewar")
const { userValidateSchema, loginValidateSchema } = require("../utils/validation")
const { isLogged } = require("../middlewares/authMiddleware")
const authRouter = express.Router()


// adding auth word the first of all routes
// authRouter.use("/auth", authRouter)
authRouter.post("/auth/login",validateMiddelware(loginValidateSchema), login)
authRouter.post("/auth/signup",validateMiddelware(userValidateSchema), singnup)
authRouter.get("/auth/logout", isLogged, logout)


module.exports= authRouter