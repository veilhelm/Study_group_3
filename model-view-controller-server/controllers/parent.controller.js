const Parent = require("../models/parent.model")

class ParentController {
    createParent = async(req, res) => {
        try {
            const parent = new Parent(req.body)
            await parent.save()
            res.status(201).send(parent)
        } catch (error) {
            res.json(error)
        }
    }
    getAllParent = async(req, res) => {
        try {
            const parent = await Parent.find({})
            res.status(200).json(parent)

        } catch (error) {
            res.status(400).json(error)
        }
    }
    updateParent = async(req, res) => {
        try {
            const parentId = req.body.id
            let [parentToUpdate] = await Parent.find({ _id: parentId })
            const succesfull = await parentToUpdate.updateOne({...req.body.data })
            res.status(200).json(succesfull)
        } catch (error) {
            console.dir(error)
            res.status(400).json(error)
        }
    }
    deleteParent = async(req, res) => {
        try {
            const parentId = req.body.id
            let [parentToDelete] = await Parent.find({ _id: parentId })
            const successfull = await parentToDelete.deleteOne()
            res.status(200).json(successfull)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

const parentController = new ParentController()

module.exports = parentController