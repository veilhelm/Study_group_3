const modelLogin = require("../model_login/model_controler")
const jwt = require("jsonwebtoken")

class controlerLogin {
    createLogin = async(req, res) => {
        try {
            console.log("entro al controlador");
            const login = new modelLogin(req.body)
            login.token = jwt.sign({ userId: login._id }, process.env.SECRET_KEY)
            await login.encryptPassword()
            const savedLogin = await login.save()
            res.status(200).json(savedLogin)


        } catch (error) {
            console.log(error.message)
            res.status(400).json(error)
        }
    }
}

const controllerLogin = new controlerLogin()
module.exports = controllerLogin