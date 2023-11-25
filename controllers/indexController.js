const route404 =(req, res)=>{
    return res.send("not found route")
}
const index =(req, res)=>{
    return res.send("root route")
}


module.exports={index, route404}