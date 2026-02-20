const express = require("express")
const multer = require("multer")
const { getAllData, updateIntroController, updateAboutController } = require("../controllers/yoga.controller")

const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })


//Get all data
router.get("/get-all-data", getAllData)

//Update intro
router.post("/update-intro", upload.single("image"), updateIntroController)

//update about
router.post("/update-about", upload.single("image"), updateAboutController)


module.exports = router