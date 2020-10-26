const router = require("express").Router()
const weatherController = require("../controllerWeather/weatherController")


router.route("/").get(weatherController.createWeather)

module.exports = router