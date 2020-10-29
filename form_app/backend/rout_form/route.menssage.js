const router = require("express").Router()
const menssageControler = require("../controler_form/controler.menssage")



router.route("/").post(menssageControler.createMenssage)
router.route("/").get(menssageControler.showMenssage)


module.exports = router