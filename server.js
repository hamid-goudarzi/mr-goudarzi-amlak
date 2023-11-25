const express =require("express");
const indexRouter = require("./routes/indexRouter");
const app =express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://127.0.0.1:27017/amlak_db')
  .then(() => console.log('DB Connected!'));

  
app.use(indexRouter);



const port=5000
app.listen(port,()=>{
    console.log(`server is runnig on port: ${port}`);
})