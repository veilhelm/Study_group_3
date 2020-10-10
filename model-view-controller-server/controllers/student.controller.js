const Student = require("../models/student.model")

class StudentController {
    createStudent = async (req, res) => {
        try{
            const student = new Student(req.body)
            await student.save()
            res.status(201).send(student)
        }catch(error){
            res.json(error)
        }
    }
    getAllStudents = async (req, res) => {
        try{
            const students = await Student.find({})
            res.status(200).json(students)
            
        }catch(error){
            res.status(400).json(error)
        }
    }
    updateStudent = async (req, res) => {
        try{
            const studentId = req.body.id 
            let [studentToUpdate] = await Student.find({_id: studentId})
            const succesfull = await studentToUpdate.updateOne({...req.body.data})
            res.status(200).json(succesfull)
        }catch(error){
            console.dir(error)
            res.status(400).json(error)
        }
    }
    deleteStudent = async (req, res) => {
        try{
            const studentId = req.body.id
            let [studentToDelete] = await Student.find({_id: studentId})
            const successfull = await studentToDelete.deleteOne()
            res.status(200).json(successfull)
        }catch(error){
            res.status(400).json(error)
        }
    }
}

const studentController = new StudentController()

module.exports = studentController