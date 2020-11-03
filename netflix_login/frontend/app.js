let password
let mail
const boton = document.querySelector(".boton")


const createUsers = async() => {
    try {
        password = document.querySelector(".imputPassword").value
        mail = document.querySelector(".imputEmail").value
        const { data } = await axios({
            method: "POST",
            baseURL: "http://127.0.0.1:4000",
            url: "netflix",
            data: { mail, password }
        })
        console.log(data)
        localStorage.setItem("token", data.token)

    } catch (error) {
        console.log(error.message)
    }

}



boton.addEventListener("click", () => {
    console.log("boton funciona")
    createUsers()


})