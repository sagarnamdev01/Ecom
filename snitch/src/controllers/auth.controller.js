const usermodel = require("../models/user.models.js")
const jwt = require("jsonwebtoken")
const sendToken = async(user, res, message)=>{
const token = jwt.sign({id: user._id},
    process.env.jwt_secret,
    { expiresIn: "7d"})
res.cookie("token", token)
res.status(200).json({
    message,
    success:true,
    user: {
        id: user._id,
        email: user.email,
        contact: user.contact,
        fullname: user.fullname,
        password: user.password,
        role: user.role

    }

})
}

 const register = async(req,res)=>{
    const{fullname, email, password, contact, role} = req.body;
try{
   
const existinguser = await usermodel.findOne({
$or:[
    {email},
   { contact}
]
})
if(existinguser) {
return res.status(400).json({message:"user already register"})
}
    const user = await usermodel.create({
        fullname,
        email,
        password,
        contact,
        role
    })
await sendToken(user, res, "User registered successfully")
}

catch(err){
    console.log(err)
    return res.status(500).json({message:" Internal Server error"})
}

 }

const Login = async(req,res)=>{
    const {email,password} = req.body;
    try{
       
        const user = await usermodel.findOne({email})
        if(!user){
            return res.status(400).json({
                message:" Invalid email and password  wrong"
            })
        }
       const matchpassword = await user.comparedpassword(password)
if(!matchpassword){
    return res.status(400).json({
        message:"Invalid email and password"
    })
}
await sendToken(user, res, "User login successfully")
    }
catch(err){
    console.log("login error->",err)
    return res.status(500).json({
        message:"Internal Server error"
    })
}
}

module.exports = {register,Login}