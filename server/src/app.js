const express = require("express")
const formRouter = require("./routes/form.routes")
const yogaRouter = require("./routes/yoga.routes")
const userRouter = require("./routes/user.route")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const path = require("path")
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173", // your React app URL (Vite default)
    credentials: true // required for cookies to work
}))
app.use(express.static(path.join(__dirname, "../public")))


app.use("/api/form", formRouter)
app.use("/api/yoga", yogaRouter)
app.use("/api/auth", userRouter)


app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})


module.exports = app