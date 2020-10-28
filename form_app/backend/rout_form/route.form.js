const router = require("express").Router()
const {model} = require("mongoose")
const formControl = require("../controler_form/controler.form")
router.route("/").post(formControl.createForm)
router.route("/").get(formControl.showForm)
router.put("/").get(formControl.deleteForm)
router.put("/").delete(formControl.deleteForm)


