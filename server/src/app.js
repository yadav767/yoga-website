const express = require("express")
const formRouter = require("./routes/form.routes")
const yogaRouter=require("./routes/yoga.routes")
const cors=require("cors")
const path=require("path")
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,"../public")))


app.use("/api/form",formRouter)
app.use("/api/yoga",yogaRouter)


app.get("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
})


module.exports = app