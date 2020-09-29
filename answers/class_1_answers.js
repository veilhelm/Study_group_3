//crear un objeto Group que contenga la propiedad integrantes, que es un array de objetos donde cada objeto sea una persona 
//y crearle los metodos al objeto Group de retornar la persona más joven, y el método de retornar la persona con el nombre más largo

console.log("hola")
const alex = { name: "alex", age: 28 }
const amalia = { name: "amalia", age: 30 }

const returnJoungest = (arrGroup) => {
    let menor = arrGroup[0].age
    let joungest = arrGroup[0]
    arrGroup.forEach(persona => joungest = (persona.age < menor) ? persona : joungest)
    return joungest
}

function returnLongestName(arrGroup) {
    let longest = arrGroup[0].name.length
    let personWithLongestName = arrGroup[0]
    arrGroup.forEach(persona => personWithLongestName = (persona.name.length > longest) ? persona : personWithLongestName)
}

const Group = {
    integrantes: [alex, amalia],
    joungest: returnJoungest
}


// Karina

class person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

const john = new person("john", 25)
const karina = new person("karina", 24)
const edwin = new person("edwin", 18)

const GroupK = {
    integrantesK: [john, karina, edwin, alex, amalia]
}

function integrante_joven(GroupKArr) {
    let menork = GroupKArr[0]
    GroupKArr.forEach(joven => menork = (joven.age < menork.age) ? joven : menork)
    return menork.name
}

function nombre_largo(GroupKArr) {
    let largok = GroupKArr[0]
    GroupKArr.forEach(nombrek => largok = (nombrek.name.length > largok.name.length) ? nombrek : largok)
    return largok.name
}

console.log(nombre_largo(GroupK.integrantesK))
console.log(integrante_joven(GroupK.integrantesK))