const { connection, connect } = require("mongoose")

function dbConnection() {
    //setUp of variables
    const uri = "mongodb+srv://edwin:edwin321010@student.bdz52.mongodb.net/posts?retryWrites=true&w=majority"

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }

    //connect to database
    connect(uri, options)

    //functions triggered on connection
    connection.once("open", () => console.log("connection to database stablished"))
    connection.on("error", (err) => console.log("connection lost", err))

}
module.exports = dbConnection