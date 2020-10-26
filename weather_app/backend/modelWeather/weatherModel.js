const { Schema, model } = require("mongoose")

const schemaWeather = new Schema({


    lon: Number,
    lat: Number,
    id: Number,
    name: String,
    cod: Number,
    weather: [{
        id: Number,
        main: String,
        description: String,
        icon: String
    }],
    base: String,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number
    },
    visibility: Number,
    wind: {
        speed: Number,
        deg: Number
    },
    clouds: {
        all: Number
    },
    dt: Number,


})

const wheather = new model("Weather", schemaWeather)
module.exports = wheather