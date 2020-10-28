const create = document.querySelector(".botones1")
const update = document.querySelector(".botones2")
const read = document.querySelector(".botones3")
const remove = document.querySelector(".botones4")
const label = document.querySelector(".menssage")


function mensajeMostrar() {
    const name = document.querySelector(".controls1").value
    const email = document.querySelector(".controls2").value
    const phone = document.querySelector(".controls3").value
    console.log(name)
    label.innerHTML = "name: " + name + " email: " + email + " phone: " + phone
    confirm("name: " + name + " email: " + email + " phone: " + phone)
}
create.addEventListener("click", mensajeMostrar)