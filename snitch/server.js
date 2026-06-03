const app = require("./src/app")
const  connectiondb  = require("./src/config/connectiondb")
connectiondb()
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

