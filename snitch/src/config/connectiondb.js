const  mongoose = require("mongoose")
const connectiondb = async()=>{
try{
        const response = await mongoose.connect("mongodb://0.0.0.0/snitch")
    
    if(response){
        console.log ("database connect successfull")
    }
}
catch(err){
console.log("database is disconnectrd",err)
}
}

module.exports = connectiondb