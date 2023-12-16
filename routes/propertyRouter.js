const express = require("express")
const {isLogged, isAdmin } = require("../middlewares/authMiddleware")
const { getAllProperties, createProperty } = require("../controllers/propertyController")
const propertyRouter = express.Router()



propertyRouter.get("/property", getAllProperties)
propertyRouter.post("/property",isLogged, isAdmin, createProperty)



module.exports= propertyRouter