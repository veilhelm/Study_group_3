const mongoose = require("mongoose")

const Student = new mongoose.Schema({
    name: String,
    age: Number
})

const student = new mongoose.model("Student", Student)

module.exports = student