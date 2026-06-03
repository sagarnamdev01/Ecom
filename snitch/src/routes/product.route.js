const express = require("express")
const router = express.Router()
const {productdata} = require("../controllers/product.controller")
const middleware = require("../middleware/user.middleware")
router.post("/",middleware, productdata)
module.exports = router