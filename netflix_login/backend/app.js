require("dotenv").config()
const dbConnection = require("./config/dbconnection")
dbConnection()
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const routeLogin = require("./rout_login/rout_login")

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())
app.use(cors())




app.use("/netflix", routeLogin)

module.exports = app