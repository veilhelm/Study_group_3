const { Schema, model } = require("mongoose")

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique: true,
        default: "pepito perez"
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        default: 18
    },
    parent: [{
        type: Schema.Types.ObjectId,
        ref: 'parent'
    }]
}, {
    timestamps: true
})

const student = new model("student", studentSchema)

module.exports = student