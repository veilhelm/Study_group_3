const {Schema, model} = require("mongoose")

 const PostSchema = new Schema({
  userId:{
    type: Number,
    required: true,
    min: 0,
  }, 
  id: Number,
  title: String,
  body: String, 
 })

 const Post = new model("Post", PostSchema)
 module.exports = Post