const mongoose = require("mongoose")

const conect = async() => {

    await mongoose.connect('url', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    mongoose.connection.once("open", () => console.log("connection to database stablished"))
}
conect()
