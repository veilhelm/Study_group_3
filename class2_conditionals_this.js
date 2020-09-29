// && y para que sea verdad ambas condiciones deben ser verdad
// || 0 para que sea verdad al menos una condición debe ser verdad
// === la condición de igualdad
// !== la condición de desigualdad 

const x = true
const y = false
const z = false

// (x && y) false
// (x || y) true
// ((y && z) || x) true

//z == x mire si estas dos son iguales sin considerar su tipo de variable
//3 == "3" true
//3 === "3" false

// if(x && y){
//     console.log("i am being executed")
// }

// if(x || y){
//     console.log("i am being executed")
// }

// if(x === z) {
//     console.log("i am being executed")
// }

// if(x !== z) {
//     console.log("i am being executed")
// }

// const isItTrue = (x !== z) ? true : false  

// if(condicion){
//     codigo 
// } 

//------------------------this--------------------------------------

// fabrica de objetos 
function Person (age, name, job){
    return{
        age,
        name,
        job
    }
} 

// clases
class Car {
    constructor(brand, age){
        this.brand = brand,
        this.age = age
    }  

}

Car.prototype.lifeSpan = function() {
    return this.age * 4
}

const testla = new Car("testla", 5)
const ford = new Car ("ford", 20)

console.log(testla, testla.lifeSpan())
console.log(ford, ford.lifeSpan())

class SportCars extends Car {
    constructor(brand, age, velocity){
        super(brand, age)
        this.velocity = velocity
    }
}

const ferrari = new SportCars("ferrrari", 0, 200)
console.log(ferrari.velocity, ferrari.lifeSpan())

//----------------------------------------------------------------------------------

class Integrante {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}

class Class {
    constructor(group){
        this.group = group
    }
}

Class.prototype.calcAverageAge = function () {
    let sumAge = 0
    this.group.forEach(persona => sumAge += persona.age)
    return sumAge/this.group.length
}

const alex = new Integrante("alex", 25)
const amalia = new Integrante("amalia", 27)
const edwin = new Integrante("edwin", 18)
const jhon = new Integrante("jhon", 25)
const karina = new Integrante("karina", 23)
const newPartner = new Integrante("mark", 30)
const group = [alex, amalia, edwin, jhon, karina, newPartner]
const studyGroup3 = new Class(group)
const subGroup = new Class([alex,edwin,jhon])
console.log(studyGroup3.calcAverageAge())
console.log(subGroup.calcAverageAge())
