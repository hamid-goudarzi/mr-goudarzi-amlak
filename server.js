const express =require("express");
const indexRouter = require("./routes/indexRouter");
const app =express()

app.use(indexRouter);


const port=5000
app.listen(port,()=>{
    console.log(`server is runnig on port: ${port}`);
})