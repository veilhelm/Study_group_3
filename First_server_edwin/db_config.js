const mongoose = require("mongoose")

const conect = async() => {
    await mongoose.connect('mongodb+srv://edwin:edwin321010@student.bdz52.mongodb.net/classGroup?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    mongoose.connection.once("open", () => console.log("seccessful connection"))
}

conect()


