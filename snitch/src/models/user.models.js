const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({

fullname: {type: String, required: true, unique: true},
email: {type: String, required: true, unique: true},
password: {type: String ,required: true, unique: true},
contact : {type:String},
role:{
    type:String,
        enum:["seller","buyer"],
        default:"buyer"
}

}, {timestamps:true})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash;
})
userSchema.methods.comparedpassword = async function(password){
    return bcrypt.compare(password,this.password)

}
 const usermodel = mongoose.model("auth", userSchema);
 module.exports = usermodel;