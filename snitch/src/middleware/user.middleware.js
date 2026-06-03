const usermodel = require("../models/user.models.js")
const jwt = require("jsonwebtoken")
const authorization = async (req,res,next)=>{
const verifytoken = req.cookies.token
console.log(verifytoken) // checking for token 
if(!verifytoken) {
    return res.status(401).json({
        message:"unauthorized"
    })
}
try{
const decode = jwt.verify(verifytoken,process.env.jwt_secret)
const user = await usermodel.findById(decode.id)
if(!user){
    return res.status(401).json({
        message:"unauthorized"
    })
}
if(user.role !== "seller"){   
    return res.status(403).json({
message:"forbidden"
})
}
next()
}catch(err){
console.log("err in middleware",err)
}
}
module.exports = authorization