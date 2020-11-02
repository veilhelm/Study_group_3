const {Schema, model} = require("mongoose")
const teacherSchema = new Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
     name:{
         type: String,
         required: true,
         minlength: 3,
         default: "no name"
     },
     age: {
        type:Number,
        required: true,
        min: 18
     },
     classrooms:{
        type: String,
        required:true,
        maxlength:3,
        default: "enter classroom"
     },
     topic:{
         type:String,
         default:"enter topic",
         required:true
     }  

}, {
    timestamps:true
})
const teacher = new model("teacher",teacherSchema)
module.exports = teacher