const modelMessage = require("../model_form/model.message")
class Menssagecontroler {
    createMenssage = async(req, res) => {
        try {
            const mens = req.body.message
            const post = await modelMessage.findById(req.body.dd)
            post.message.push(mens)
            await post.save()
            res.status(200).json(post)
        } catch (error) {
            console.log(error.message)
            res.status(400).json(error)
        }

    }
    showMenssage = async(req, res) => {
        try {
            const message = await modelMessage.find({})
            res.status(200).json(message)
        } catch (error) {
            res.status(400, json(error))
        }

    }


}


const menssageControler = new Menssagecontroler()

module.exports = menssageControler