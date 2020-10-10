// para crear aplicaciones crear el comando superior express
const express = require('express') // todo lo de la libreria 'express', lo aloja a objeto express
require("./DBconfig")
const Student = require("./StudentModel")
const app = express()

let names = []

app.use(express.json())

app.get("/", function(req, res) {
    console.log(req)
    res.send("John server, connect, hello word")
})

app.get("/sayhi/", (req, res) => {

    res.send("Esta en el directorio sayhi,}..")
})

app.post("/saveNames", (req, res) => {
    const Users = req.body.users
    Users.forEach(user => {
        const student = new Student({ names: user.name, age: user.age })
        student.save()
    })
    res.send("nombres guardados")
})

app.get("/getNames", (req, res) => {
    names = names.map(name => name.concat(" estudiante 22"))
    res.send(names)
})

app.listen(2500, () => {
    console.log("listening in port 3500...")
})