const {connection, connect} = require("mongoose")

function dbConnection() {
    const uri = "aqui pon la dirección de tu base de datos!!! creénla no sean flojos"
    const options = {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
    connect(uri, options)

    connection.once("open", () => console.log("connection to database stablished"))
}

module.exports = dbConnection