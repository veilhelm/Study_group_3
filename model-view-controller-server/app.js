const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const studentRouter = require("./routes-viewers/student.route")
const parentRouter = require("./routes-viewers/parent.router")
const dbConnection = require("./config/dbConnection")
dbConnection()

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())

app.use("/student", studentRouter)
app.use("/parents", parentRouter)

module.exports = app