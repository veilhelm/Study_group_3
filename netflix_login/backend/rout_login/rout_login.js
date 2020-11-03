const router = require("express").Router()
const postController = require("../controler_login/login_controler")

router.route("/").post(postController.createLogin)

module.exports = router