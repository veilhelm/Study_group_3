const mongoose = require("mongoose")

const conect = async() => {

    await mongoose.connect('mongodb+srv://johnm:app.use69301@clusterstudent.ojyam.mongodb.net/Student?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    mongoose.connection.once("open", () => console.log("connection to database stablished"))
}
conect()