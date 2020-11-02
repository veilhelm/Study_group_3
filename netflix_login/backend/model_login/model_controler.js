const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
const formSchema = new Schema({
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

}, {
    timestamps: true
})

formSchema.methods.encryptPassword = async function () {
    this.password = await bcrypt.hash(this.password, 8)
}

const formNet = new model("form-netflix", formSchema)
module.exports = formNet