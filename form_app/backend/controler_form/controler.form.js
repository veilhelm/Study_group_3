    const modelForm = require("../model_form/model.form")
    const modelMessage = require("../model_form/model.message")



    class FormControl {
        createForm = async(req, res) => {
            try {
                const form = new modelForm(req.body)
                let [message] = await modelMessage.find({ _id: "5f9a1ec74448672d78296c07" })
                form.message = message.menssage[Math.floor(Math.random() * (8 - 1 + 1) + 1)]
                console.log(form.message)
                console.log(form)
                await form.save()
                res.status(200).json(form)


            } catch (error) {
                console.log(error.message)
                res.status(400).json(error)
            }
        }




        showForm = async(req, res) => {
            try {
                console.log(req.body.mail)
                const [users] = await modelForm.find({ mail: req.body.mail })

                res.status(200).json(users)
            } catch (error) {
                res.status(400, json(error.menssage))
            }

        }
        updateForm = async(req, res) => {
            try {
                let [updateForm] = await modelForm.find({ mail: req.body.mail })
                await updateForm.updateOne({ name: req.body.name, number: req.body.number })
                res.status(200).json(updateForm)
            } catch (error) {
                res.status(400).json(error.menssage)
            }
        }
        deleteForm = async(req, res) => {
            try {
                let [FormToDelete] = await modelForm.find({ mail: req.body.mail })
                const successfull = await FormToDelete.deleteOne()
                console.log(successfull)
                res.status(200).json(successfull)
            } catch {

            }
        }

    }
    const formControl = new FormControl()
    module.exports = formControl