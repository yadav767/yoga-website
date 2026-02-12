const express = require("express")
const { submitFormController } = require("../controllers/formController")

const router = express.Router()


router.post("/submit", submitFormController)


module.exports = router