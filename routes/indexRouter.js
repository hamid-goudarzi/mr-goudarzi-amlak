const express= require("express")
const { index, route404 } = require("../controllers/indexController")
const indexRouter= express.Router()
const authRouter= require("./authRouter")
const propertyRouter = require("./propertyRouter")

indexRouter.use(authRouter)
indexRouter.use(propertyRouter)
indexRouter.get("/",index)
indexRouter.use("*", route404)
module.exports=indexRouter