const menssage=require("../model_form/model.message")
class Menssagecontroler{
  createMenssage=async(req,res)=>{
       try {
           const post=req.body.menssage
           const mensaje=await menssage()
           console.log(mensaje.menssage)
           const arreglo=mensaje.menssage.push(post)
           mensaje.menssage=arreglo
           await mensaje.save()
           res.status(200).json(mensaje)
       } catch (error) {
           console.log(error.menssage)
           res.status(400).json(error)
       } 
        
  }


}


const menssageControler=new Menssagecontroler()

module.exports=menssageControler

