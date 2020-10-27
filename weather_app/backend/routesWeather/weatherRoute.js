const router = require("express").Router()
const weatherController = require("../controllerWeather/weatherController")


router.route("/").get(weatherController.createWeather)
router.route("/").post(weatherController.createCity)

module.exports = router