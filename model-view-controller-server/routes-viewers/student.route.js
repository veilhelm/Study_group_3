const router = require("express").Router()
const studentController = require("../controllers/student.controller")

router.route("/").post(studentController.createStudent)
router.route("/").get(studentController.getAllStudents)
router.route("/").put(studentController.updateStudent)
router.route("/").delete(studentController.deleteStudent)

module.exports = router