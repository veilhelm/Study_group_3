const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
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
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        default: 0000

    },
    message: {
        type: String,
        default: "enter message"
    },
    token: {
        type: [{type: String}],
        required: true
    }
}, {
    timestamps: true
})

formSchema.methods.encryptPassword = async function () {
    this.password = await bcrypt.hash(this.password, 8)
}

const form = new model("form", formSchema)
module.exports = form