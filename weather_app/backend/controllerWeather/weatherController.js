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
            const temp = weather.main.temp - 273.15
            weather.main.temp = temp.toFixed(2)

            //weather.save()
            res.status(200).json(weather)

        } catch (error) {
            console.log(error.mensagge)
            res.status(400).json(error.menssage)
        }


    }
    createCity = async(req, res) => {
        const city = req.body.city

        try {

            const { data } = await axios({
                method: "POST",
                baseURL: process.env.BASE,
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=955b5cf6abc8109c8487b80dc67fea79"
            })
            const weather = await new modelWeather(data)
                //weather.save()
            res.status(200).json(weather)

        } catch (error) {
            console.log(error.mensagge)
            res.status(400).json(error.menssage)
        }

    }
}

const weatherController = new WeatherController()
module.exports = weatherController