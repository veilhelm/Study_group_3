const mongoose = require("mongoose")

const Student = new mongoose.Schema({
    names: String,
    age: Number
})

const student = new mongoose.model("Student", Student)

module.exports = student