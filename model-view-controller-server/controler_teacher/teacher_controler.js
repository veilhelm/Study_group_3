const teacher = require("../model_teacher/teacher_model")
const Teacher = require("../model_teacher/teacher_model")
class TeacherControler {
    createTeacher = async (req,res) => {
        try{
            const teacher = new Teacher(req.body)
            await teacher.save()
            res.status(201).json(teacher)
        }catch(error){
            res.json(error)
        }
    }
        showTeachers = async (req, res) => {
        try{
           const teachers = await Teacher.find({})
           res.status(200).json(teachers) 
        }catch(error){
            res.status(400,json(error))
        }
        
    }
    updateTeachers = async (req, res) => {
        try{
            const teacherId = req.body.id
             let [updateTeacher] = await Teacher.find({id:teacherId})
             await updateTeacher.updateOne({...req.body.data})
        }catch(error){
            res.status(400).json(error)
        }
    }
    deleteTeacher = async (req, res) => {
        try{
            const teacherId = req.body.id
            let [teacherToDelete] = await teacherId.find({id:teacherId})
            const successfull = await teacherToDelete.deleteOne()
            res.status(200).json(successfull)
        }catch{

        }
    }
}
const teacherControler = new TeacherControler()
module.exports = teacherControler