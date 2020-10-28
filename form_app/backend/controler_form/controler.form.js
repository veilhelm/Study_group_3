    const Form = require("../model_form/model.form")
    class FormControl {
        createForm = async (req,res) =>{
            try{
                const form = new Form(req.body)
                await form.save()
                res.status(200).json(form)
            }catch(error){
                res.json(error)
            }  
        }
        showForm = async (req, res) => {
            try{
               const form = await Form.find({})
               res.status(200).json(forms) 
            }catch(error){
                res.status(400,json(error))
            }
            
        }
        updateForm = async (req, res) => {
            try{
                const teacherId = req.body.id
                 let [updateForm] = await Form.find({number:numberid})
                 await updateForm.updateOne({...req.body.data})
            }catch(error){
                res.status(400).json(error)
            }
        }
        deleteForm = async (req, res) => {
            try{
                const formId = req.body.id
                let [FormToDelete] = await formId.find({number:numberId})
                const successfull = await FormToDelete.deleteOne()
                res.status(200).json(successfull)
            }catch{
    
            }
        }
         
    }
    const formControl = new FormControl()
    module.exports = formControl