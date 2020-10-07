const mongoose = require("mongoose")

const Student = new mongoose.Schema({
    name:String
})
const student =new mongoose.model("student", Student)
module.exports = student