const {connection, connect} = require("mongoose")

function dbConnection() {
    const url = "mongodb+srv://edwin:edwin321010@student.bdz52.mongodb.net/classGroup?retryWrites=true&w=majority"
    const options = {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
    connect(url, options)

    connection.once("open", () => console.log("connection to database stablished"))
}

module.exports = dbConnection