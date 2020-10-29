require("dotenv").config()
const dbConnection = require("./config/dbconnection")
dbConnection()
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const routerMenssage=require("./rout_form/route.menssage")

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())
app.use(cors())

app.get("/",(req,res)=>{
    console.log("funciona")
    res.send("servidor conectado")
} )

app.use("/post",routerMenssage)

module.exports = app

