const express = require("express")
const {isLogged, isAdmin } = require("../middlewares/authMiddleware")
const { getAllProperties, createProperty } = require("../controllers/propertyController")
const upload = require("../middlewares/uploadMiddleware")
const { uploadImage } = require("../utils/functions/uploadImage")
const propertyRouter = express.Router()



propertyRouter.get("/properties", getAllProperties)
propertyRouter.post("/properties",isLogged, isAdmin, createProperty)
propertyRouter.post("/properties/upload",isLogged, isAdmin,upload.single('image'), uploadImage )




module.exports= propertyRouter