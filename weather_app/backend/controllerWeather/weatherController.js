const axios = require("axios")
const EventEmiter = require("events")
const modelWeather = require("../modelWeather/weatherModel")

class WeatherController extends EventEmiter {
    createWeather = async(req, res) => {
        try {

            const { data } = await axios({
                method: "GET",
                baseURL: process.env.BASE,
                url: process.env.URL
            })
            const weather = await new modelWeather(data)
            weather.save()
            res.status(200).json(weather)

        } catch (error) {
            console.log(error.mensagge)
            res.status(400).json(error.menssage)
        }


    }
}

const weatherController = WeatherController()
module.exports = weatherController