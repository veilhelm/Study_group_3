const title = document.querySelector(".h2")
const content = document.querySelector(".description")
const celcius = document.querySelector(".degrees")

const updateContent = async() => {
    const { data } = await axios({
        method: "GET",
        baseURL: "http://127.0.0.1:4000",
        url: "weather"
    })
    title.innerHTML = data.name
    content.innerHTML = data.weather[0].description
    celcius.innerHTML = data.main.temp
}

updateContent()