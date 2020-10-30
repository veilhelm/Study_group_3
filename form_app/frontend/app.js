const create = document.querySelector(".botones1")
const update = document.querySelector(".botones2")
const read = document.querySelector(".botones3")
const removeUser = document.querySelector(".botones4")
const label = document.querySelector(".menssage")


const createUsers = async() => {
    try {
        const name = document.querySelector(".controls1").value
        const mail = document.querySelector(".controls2").value
        const number = document.querySelector(".controls3").value
        const password = document.querySelector(".controls4").value
        const { data } = await axios({
            method: "POST",
            baseURL: "http://127.0.0.1:4000",
            url: "form",
            data: { name, mail, number, password }
        })
        console.log(data)
        document.querySelector(".controls1").value = data.name
        document.querySelector(".controls2").value = data.mail
        document.querySelector(".controls3").value = data.number
        document.querySelector(".controls4").value = data.password
        label.innerHTML = data.name + ", " + data.message
    } catch (error) {
        label.innerHTML = error.message
    }

}


const deleteUser = async() => {
    try {
        const proceed = confirm("You are about to delete a user. do you wish to continue?")
        const mail = document.querySelector(".controls2").value
        if (proceed) {
            const { data } = await axios({
                method: "DELETE",
                baseURL: "http://127.0.0.1:4000",
                url: "form",
                data: { mail }
            })
            document.querySelector(".controls1").value = ""
            document.querySelector(".controls2").value = ""
            document.querySelector(".controls3").value = ""
            label.innerHTML = "User: " + data.name + " Delete successfully "
        } else {
            label.innerHTML = "elimination canceled¡¡ "
        }
    } catch (error) {
        label.innerHTML = error.message
    }


}


const updateUsers = async() => {
    try {
        const name = document.querySelector(".controls1").value
        const mail = document.querySelector(".controls2").value
        const number = document.querySelector(".controls3").value
        const { data } = await axios({
            method: "PUT",
            baseURL: "http://127.0.0.1:4000",
            url: "form",
            data: { mail, name, number }
        })
        document.querySelector(".controls1").value = ""
        document.querySelector(".controls2").value = ""
        document.querySelector(".controls3").value = ""
        label.innerHTML = "User: " + name + " update successfully "
    } catch (error) {
        label.innerHTML = error.message
    }

}

const findUser = async() => {
    try {
        const mail = document.querySelector(".controls2").value
        const { data } = await axios({
            method: "POST",
            baseURL: "http://127.0.0.1:4000",
            url: "form/find",
            data: { mail: mail }
        })
        console.log(data)
        document.querySelector(".controls1").value = data.name
        document.querySelector(".controls2").value = data.mail
        document.querySelector(".controls3").value = data.number
        label.innerHTML = "user: " + data.name + ", " + data.message
    } catch (error) {
        label.innerHTML = error.message
    }


}




create.addEventListener("click", () => {
    console.log("create button")


    createUsers()

})

update.addEventListener("click", () => {
    console.log("update button")
    updateUsers()

})

read.addEventListener("click", () => {

    findUser()
    console.log(" find button")
})

removeUser.addEventListener("click", () => {
    deleteUser()
        //.then((data) => console.log(data))
        //.catch((error) => console.log(error.message))
        //.finally(() => console.log("this promise was executed"))

    console.log("delete button")
})