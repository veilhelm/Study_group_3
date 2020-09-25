//crear un objeto Group que contenga la propiedad integrantes, que es un array de objetos donde cada objeto sea una persona 
//y crearle los metodos al objeto Group de retornar la persona más joven, y el método de retornar la persona con el nombre más largo

const alex = {name:"alex", age:28}
const amalia = {name:"amalia", age:30}

const returnJoungest = (arrGroup) => {
    let menor = arrGroup[0].age
    let joungest = arrGroup[0]
    arrGroup.forEach(persona => joungest = (persona.age < menor) ? persona : joungest )
    return joungest
}

function returnLongestName (arrGroup) {
    let longest = arrGroup[0].name.length
    let personWithLongestName = arrGroup[0]
    arrGroup.forEach(persona => personWithLongestName = (persona.name.length > longest) ? persona : personWithLongestName )
}

const Group = {
    integrantes: [alex, amalia],
    joungest: returnJoungest
}