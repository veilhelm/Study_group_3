const { Schema, model } = require("mongoose")

const parentSchema = new Schema({

    name: String,
    age: Number,
    studentId: [{
        type: Schema.Types.ObjectId,
        ref: 'student'

    }],
    profession: String


})
const modelParent = new model("parent", parentSchema)
module.exports = modelParent