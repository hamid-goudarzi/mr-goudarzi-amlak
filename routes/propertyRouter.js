const express = require("express")
const {isLogged, isAdmin } = require("../middlewares/authMiddleware")
const { getAllProperties, createProperty, uploadImage } = require("../controllers/propertyController")
const upload = require("../middlewares/uploadMiddleware")
const propertyRouter = express.Router()



propertyRouter.get("/api/properties", getAllProperties)
propertyRouter.post("/api/properties",isLogged, isAdmin, createProperty)
propertyRouter.post("/api/properties/upload",isLogged, isAdmin,upload.single('image'), uploadImage)




module.exports= propertyRouter