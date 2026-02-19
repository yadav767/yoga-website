const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

async function loginController(req, res) {
    const { username, password } = req.body

    const user = await userModel.findOne({ username, password });

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    res.cookie("token", user._id.toString(), { httpOnly: true });
    res.json({ success: true });
}

async function logoutController(req, res) {
    res.clearCookie("token");
    res.json({ success: true });
}

async function checkAuthController(req, res) {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ authenticated: false });

    const user = await userModel.findById(token);
    if (!user) return res.status(401).json({ authenticated: false });

    res.json({ authenticated: true });
}

module.exports = {
    loginController, logoutController, checkAuthController
}