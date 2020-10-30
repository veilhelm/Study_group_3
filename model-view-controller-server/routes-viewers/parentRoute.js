const router = require("express").Router()
const parentController = require("../controllers/parentController")

router.route("/:id").post(parentController.createParent)
router.route("/").get(parentController.getAllParent)
router.route("/").put(parentController.updateParent)
router.route("/").delete(parentController.deleteparent)

module.exports = router