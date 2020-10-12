const router = require("express").Router()
const { model } = require("mongoose")
const teacherControler = require("../controler_teacher/teacher_controler")
router.route("/").post(teacherControler.createTeacher)
router.route("/").get(teacherControler.showTeachers)
router.put("/").get(teacherControler.updateTeachers)
router.put("/").delete(teacherControler.deleteTeacher)


module.exports = router