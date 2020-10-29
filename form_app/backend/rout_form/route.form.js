const router = require("express").Router()
const formControl = require("../controler_form/controler.form")

router.route("/").post(formControl.createForm)
router.route("/find").post(formControl.showForm)
router.route("/").delete(formControl.deleteForm)
router.route("/").put(formControl.updateForm)

module.exports = router