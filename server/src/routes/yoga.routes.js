const express=require("express")
const { getAllData }=require("../controllers/yoga.controller")

const router=express.Router()

router.get("/get-all-data",getAllData)


module.exports=router