const Login = require("../model_login")
class controlerLogin {
    createLogin = async(req,res)=>{
        try{
           const login = new Login(req.body)
            await login.save()
        }catch(error){
            console.log(error)
        }
    }
}