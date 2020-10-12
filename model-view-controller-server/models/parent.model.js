const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const student = mongoose.model('student') /// Traer  informacion tabla estudiante

const parentSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique: true,
        default: "N.N"
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        default: 25
    },
    profession: {
        type: String,
        required: true,
        unique: false,
        default: "family Guy"
    },
    student: { type: Schema.ObjectId, ref: "student" }
}, {
    timestamps: true
})

const parent = new model("parent", parentSchema)

module.exports = parent