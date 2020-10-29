const { Schema, model } = require("mongoose")
const messageSchema = new Schema({
    title: {
        type: String
    },
    menssage: [{
        type: String,
    }]

})

const modelMessage = new model("Posts", messageSchema)

module.exports = modelMessage