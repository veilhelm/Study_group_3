const express = require("express")

const app = express()

app.use(express.json())

let names = []

app.get("/", (req, res) => {
    console.log(req)
    res.send("Hola Mundo, si funciono")

})

app.get("/seyhi", (req, res) => {
    res.send("Hola")

})
 
app.post("/saveNames", (req, res) => {
    names = req.body.names
    res.send("Nombres Guardados")
})

app.get("/getNames", (req, res) => {
    res.send(names)
})

app.listen(2000, () => {
    console.log("lisening in port 2000")
})