const modelStudent = require("../models/student.model")
const modelParent = require("../models/parent.model")

class parentData {
    //create parent data with (name, age, studentId(schema Student), profession)
    createParent = async(req, res) => {
        try {
            const saveParent = new modelParent(req.body)
            const searchForStudent = await modelStudent.findById(req.params.id)
            saveParent.studentId = searchForStudent
            await saveParent.save()
            searchForStudent.parent.push(saveParent)
            await searchForStudent.save()


            res.status(200).json("save. parent: " + saveParent)
        } catch (error) {
            console.log("not create parent ", error)
            res.status(400).json(error)

        }

    }

    getAllParent = async(req, res) => {
        try {
            const parents = await modelParent.find({}).populate('studentId')
            res.status(200).json(parents)
        } catch (error) {
            res.status(400).json("Error. " + error)
        }
    }


    updateParent = async(req, res) => {
        try {
            const parentId = req.body.id
            let [parentToUpdate] = await modelParent.find({ _id: parentId })
            const succesfull = await parentToUpdate.updateOne({...req.body.data })
            res.status(200).json(succesfull)
        } catch (error) {
            console.dir(error)
            res.status(400).json(error)
        }
    }
    deleteparent = async(req, res) => {
        try {
            const parentId = req.body.id
            let [parentToDelete] = await modelParent.find({ _id: parentId })
            const successfull = await parentToDelete.deleteOne()
            res.status(200).json(successfull)
        } catch (error) {
            res.status(400).json(error)
        }
    }


}
const parentController = new parentData()
module.exports = parentController