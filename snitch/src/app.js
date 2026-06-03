require('dotenv').config();
const express = require("express")
const app = express()
const authrouter = require("./routes/auth.route.js")
const productdata = require("./routes/product.route.js")
const cookieparser = require("cookie-parser")
app.use(express.json()); 
app.use(cookieparser())
app.use("/api/auth",authrouter)
app.use("/api/product",productdata)
module.exports = app