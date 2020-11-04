const router = require("express").Router()
const formControl = require("../controler_form/controler.form")
const { authMiddleware } = require("../utils/middlewares")

router.route("/").post(formControl.createForm)
router.route("/find").post(formControl.showForm)
router.route("/").delete(authMiddleware, formControl.deleteForm)
router.route("/").put(authMiddleware, formControl.updateForm)

module.exports = router