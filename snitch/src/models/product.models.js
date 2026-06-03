const mongoose = require("mongoose")
const product = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    Price:[{
        amount:{
        type:Number,
        required:true
        },
        currancy:{
            type:String,
  enum:["INR","USD","EUR"],
  default:"INR"
        }
}],
image:[{
    url:{
        type:String,
        required:true
    }
}]
}, {timestamps:true})

const productmodel = mongoose.model("product",product)
module.exports = productmodel