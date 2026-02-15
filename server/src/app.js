const express = require("express")
const formRouter = require("./routes/form.routes")
const cors=require("cors")
const app = express()

app.use(express.json())
app.use(cors())


app.use("/api/form",formRouter)


module.exports = app