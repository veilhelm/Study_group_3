const router = require("express").Router()
const parentController = require("../controllers/parent.controller")

router.route("/").post(parentController.createParent)
router.route("/").get(parentController.getAllParent)
router.route("/").put(parentController.updateParent)
router.route("/").delete(parentController.deleteParent)

module.exports = router