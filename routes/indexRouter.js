const express= require("express")
const { index, route404 } = require("../controllers/indexController")
const indexRouter= express.Router()
const authRouter= require("./authRouter")

indexRouter.use(authRouter)
indexRouter.get("/",index)
indexRouter.use("*", route404)
module.exports=indexRouter