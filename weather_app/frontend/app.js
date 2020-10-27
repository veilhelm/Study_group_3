const title = document.querySelector(".h2")
const content = document.querySelector(".description")
const celcius = document.querySelector(".degrees")
const wind = document.querySelector(".list-group-item2")
const humidity = document.querySelector(".list-group-item1")

const updateContent = async() => {
    const { data } = await axios({
        method: "GET",
        baseURL: "http://127.0.0.1:4000",
        url: "weather"
    })
    title.innerHTML = data.name + " City "
    content.innerHTML = "Description: " + data.weather[0].description
    celcius.innerHTML = "Temperatura: " + data.main.temp + "C°"
    wind.innerHTML = "wind speed: " + data.wind.speed + "m/s"
    humidity.innerHTML = "humidity: " + data.main.humidity + "%"
}

updateContent()

const updateCity = async() => {

    const city = document.querySelector(".from-control").value
    console.log(city)
    const { data } = await axios({
        method: "POST",
        baseURL: "http://127.0.0.1:4000",
        url: "weather"
    })
    title.innerHTML = data.name
    content.innerHTML = data.weather[0].description
    celcius.innerHTML = data.main.temp
}