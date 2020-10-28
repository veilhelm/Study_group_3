const {Schema, model} = require("mongoose")
const formSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        default: "no name"
    },
    mail:{
        type: String,
        require:true,
        minlength: 8,
        default: "enter correo",
        unique: true
    },
    number:{
        type: Number,
        require:true,
        min:5,
        max:10,
        default: 0000

    },
    message:{
        type:String,
        required:true,
        default: "enter message"
    }
},{
    timestamps:true
})
const form = new model("form",formSchema)
module.exports = form