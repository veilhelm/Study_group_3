const router = require("express").Router()
const postController = require("../controllers/post.controller")

router.route("/").get(postController.createAPost)

module.exports = router