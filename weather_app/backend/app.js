require("dotenv").config()
const dbConnection = require("./config/dbweather")
dbConnection()
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const weaterRoute = require("./routesWeather/weatherRoute")

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())
app.use(cors())

module.exports = app