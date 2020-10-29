const { Schema, model } = require("mongoose")
const formSchema = new Schema({
    name: {
        type: String,
        default: "no name"
    },
    mail: {
        type: String,
        require: true,
        default: "enter correo",
        // unique: true
    },
    number: {
        type: Number,
        default: 0000

    },
    message: {
        type: String,
        default: "enter message"
    }
}, {
    timestamps: true
})
const form = new model("form", formSchema)
module.exports = form