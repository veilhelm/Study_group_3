const router = require("express").Router()
const menssageControler = require("../controler_form/controler.menssage")



router.route("/").post(menssageControler.createMenssage)


module.exports=router