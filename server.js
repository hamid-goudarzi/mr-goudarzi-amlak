const express =require("express");
const indexRouter = require("./routes/indexRouter");
const app =express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var cors = require('cors')
const path = require("path");

//  todo
app.use(cors())
// تنظیم دایرکتوری برای تصاویر استاتیک
app.use("/public/uploads/properties", express.static(path.join(__dirname, "public/uploads/properties")));
 



require('dotenv').config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://127.0.0.1:27017/amlak_db')
  .then(() => console.log('DB Connected!'));

  
app.use(indexRouter);



const port=5000

app.listen(port,()=>{
    console.log(`server is runnig on port: ${port}`);
})