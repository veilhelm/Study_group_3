let x = 20
const y = 5
const z = x + y
x=60

const num = 1.2
const string = "hola soy alex" 
const object = { name: "alex", age: z }
const array = [1,2,3,4,5,6]
const arrayObj = [object, 2]
const boolean = true //false


console.log(object.name)
console.log(object.age)
console.log(array[0])
console.log(arrayObj[0].age)

//propiedades de las variables
console.log(string.length)
console.log(array.length)

//metodos de las variables
const stringArr = array.join("-")
console.log(stringArr)

const amalia = {name: "amalia", age: 27}
const alex = {name: "alex", age: 26}
const jhon = {name: "john", age: 25}
const edwin = {name: "edwin", age: 18}
const karina = {name: "karina", age: 23}
const newPartner = {name: "mark", age: 30}

const group = [amalia, alex, jhon , edwin , karina, newPartner]
const subGroup = [amalia, alex, jhon , edwin]
// let sumAge = 0
// group.forEach( persona => sumAge += persona.age )
// const average = sumAge/group.length
// console.log(average)


//methodos
//array forEach join

//--------------functions--------------------
function calcAverageAge (groupArr) {
    let sumAge = 0
    groupArr.forEach( persona => sumAge += persona.age )
    return  sumAge/groupArr.length
}

const calcAverageAgeArrow = (groupArr) => {
    let sumAge = 0
    groupArr.forEach( persona => sumAge += persona.age )
    return  sumAge/groupArr.length
}

const Group = {
    integrantes: group,
    calcAverageAge: calcAverageAgeArrow
}

console.log(calcAverageAge(group))
console.log(calcAverageAge(subGroup))
console.log(calcAverageAgeArrow(subGroup))
console.log(Group.calcAverageAge(Group.integrantes))

// 1. lee todo el código
// 2. let const var function
// 3. asignarlos en memoria (hoisting)
// 4. corre el código
