const express = require("express")
const multer = require("multer")
const { getAllData, updateIntroController } = require("../controllers/yoga.controller")

const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })


//Get all data
router.get("/get-all-data", getAllData)

//Update intro
router.post("/update-intro", upload.single("image"), updateIntroController)


module.exports = router