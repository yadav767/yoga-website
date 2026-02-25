const express = require("express")
const formRouter = require("./routes/form.routes")
const yogaRouter = require("./routes/yoga.routes")
const userRouter = require("./routes/user.route")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173", "https://yoga-website-delta-nine.vercel.app"], // your React app URL (Vite default)
    credentials: true // required for cookies to work
}))


app.use("/api/form", formRouter)
app.use("/api/yoga", yogaRouter)
app.use("/api/auth", userRouter)

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.get("/", (req, res) => {
    res.send("Server is live.....");
    console.log("server is live");
})


module.exports = app