const express = require("express")
const { loginController, logoutController, checkAuthController } = require("../controllers/user.controller")

const router = express.Router()

router.post("/login", loginController)

router.delete("/logout", logoutController)

router.get("/check-auth",checkAuthController)


module.exports = router