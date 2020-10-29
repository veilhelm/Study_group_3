const {Schema, model} = require("mongoose")
const menssageSchema = new Schema({
   message:[{
       type:String,
    }]

})

const modelMenssage=new model("Posts",menssageSchema)

module.exports=modelMenssage