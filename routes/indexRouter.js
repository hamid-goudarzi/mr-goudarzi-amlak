const express = require("express");
const { index, route404 } = require("../controllers/indexController");
const indexRouter = express.Router();
const authRouter = require("./authRouter");
const propertyRouter = require("./propertyRouter");
const userRouter = require("./userRouter");

indexRouter.use("/api", authRouter);
indexRouter.use("/api", propertyRouter);
indexRouter.use("/api", userRouter);
indexRouter.get("/", index);
indexRouter.use("*", route404);
module.exports = indexRouter;
