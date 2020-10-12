const { connection, connect } = require("mongoose")

function dbConnection() {
    const url = "url"
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
    connect(url, options)

    connection.once("open", () => console.log("connection to database stablished"))
}

module.exports = dbConnection