const express = require("express")
require("./db_config")
const app = express()
const Student = require("./student.Model")
app.use(express.json())
app.get("/", (req, res)=>{
    console.log(req)
    res.send("hola mundo")
})
app.get("/seyhi",(req,res)=>{
    res.send("hi edwin")
})
app.post("/saveNames",(req, res)=>{

    const names = req.body.names
    names.forEach(name => {
        const student = new Student({name:name}) 
        student.save()
    })
    res.send("nombres guardados")
})
app.listen(4000,()=>{
     console.log("listening in port 4000")
 })
app.get("/GetNames",(req,res)=>{
    names = names.map(name => name.concat(" estudiante"))
    res.send(names)
})