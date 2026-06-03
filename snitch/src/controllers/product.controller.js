const productmodel = require("../models/product.models")
const productdata = async(req,res)=>{
    const{ title, description, Price ,image} = req.body
try{
const PRODUCT = await productmodel.create({
    title, 
    description, 
    Price,
     image
})
return res.status(200).json({
    messages:"Product Created Successfull",
    product:PRODUCT
})
}
catch(err){
    console.log("not create Product", err)
    res.status(500).json({
        message:"Internal Server error"
    })
}
}
module.exports = {productdata}