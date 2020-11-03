const { connection, connect } = require("mongoose")

function dbConnection() {
    //la variables
    const uri = process.env.URLBD || 4001

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }

    //conecta a la base de datos
    connect(uri, options)

    //functions triggered on connection
    connection.once("open", () => console.log("connection to database stablished"))
    connection.on("error", (err) => console.log("connection lost", err))

}
module.exports = dbConnection