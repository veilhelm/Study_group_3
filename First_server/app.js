const express = require("express")
const Student = require("./student.model")
require("./dbConfig")

const app = express()
app.use(express.json())

app.get("/", (req, res)=> {
    console.log(req)
    res.send("hola mundo")
})

app.get("/sayhi", (req, res) => {
    res.send("hola alex")
})

app.post("/saveNames", (req, res) => {
    const users = req.body.users
    users.forEach(user => {
        const student = new Student({name: user.name, age: user.age})
        student.save()
    })
    res.send("nombres guardados")
})

app.get("/getNames", (req, res) => {
    names = names.map( name => name.concat(" estudiante"))    
    res.send(names)
})

app.listen(3000, ()=> {
    console.log("listening in port 3000")
})

