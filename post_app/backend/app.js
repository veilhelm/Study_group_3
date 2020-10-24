require("dotenv").config()
const dbConnection = require("./config/dbConnection")
dbConnection()
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const postRouter = require("./routes/post.routes")

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())
app.use(cors())

app.use("/post", postRouter)

module.exports = app

