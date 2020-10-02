//Object oriented programming
//Functional programming
//currying 
//clousures

class Person {
    constructor(age, name) {
        this.name = name
        this.age = age
    }
}

Person.prototype.eat = function() {
    return "im eating"
}

Person.prototype.sleeping = function() {
    return "im sleeping"
}

const alex = new Person(25, "alex")

const userLoging = (user) => {
    if (user.password === password) return true
}

//principio SOLID 
//función debe ser pura:
// que debe hacer una y solo una cosa
//no debe tener side effects

//principio de inmutabilidad
//Open to expansion and close to changes


const x = 25

//ejemplo de no puro
const sum = (a, b) => {
    return a + b + x
}

//ejemplo de no puro
const sum1 = (a) => {
    x += a
}

//funcion pura
const sum2 = (a, b) => {
    return a + b
}


//--------------clousures---------------------
//global scope
//local scope

function clousureExample(param1) {
    return () => {
        console.log(param1)
    }
}

const dbCall = "hola"

const clousure = clousureExample(dbCall)

console.log(clousure())
console.log(clousureExample("hello")())

function calcAvarage(arrData) {
    const sum = arrData.reduce((acum, current) => acum += current, 0)
    return () => sum / arrData.length
}

const arrAges = [25, 30, 40, 10, 15]
console.log(calcAvarage(arrAges)())


function sayHi(greetingStyle) {
    let greet = ""
    switch (greetingStyle) {
        case "friendly":
            greet = "hi folks, my name is "
            break;
        case "mad":
            greet = "what are you looking at, I am "
            break;
        default:
            greet = "hi, i am "
            break
    }
    return (name) => greet.concat(name)
}

console.log(sayHi("friendly")("alex"))
console.log(sayHi("mad")("edwin"))

const madGreeting = sayHi("mad")

console.log(madGreeting("karina"))
console.log(madGreeting("jhon"))

function tripleMultiplication(a) {
    return (b) => {
        return (c) => a * b * c
    }
}
console.log(tripleMultiplication(2)(4)(1))

//exercise 
//function create pizza
// primero: definir el tipo de masa
// segundo: el tipo de ingrediente peperoni y napolitana
// tercero: tipo de cliiente si es online o en sitio 
// cuarto: nombre del cliente 
// pizas listas de masa gruesa y de peperoni
//pizas listas de masa delgada napolitana
// 2 clientes online que se llaman alex y amalia
// cliente en sitio que se llama karina

function createPizza(dough) {
    return (ingredient) => {
        return (client) => {
            return (name) => {
                console.log(dough, ingredient, client, name)
            }
        }
    }
}
const peperoni = createPizza("Gruesa")("peperoni")
const napolitana = createPizza("delgada")("napolitana")
napolitana("online")("alex")
napolitana("online")("amalia")
peperoni("sitio")("karina")


// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.

// Example 1:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

// Note:
// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.

const countingLetters = (arrWords, chars) => {
    const newArr = arrWords.filter( word => {
        return word.split("").every( letter => {
            if(chars.includes(letter)) {
                return true
            }
            return false
        })
    })
    return newArr.join("").length
}

console.log(countingLetters(["cat","bt","hat","tree"], "atach"))

//clousures-currying-theory functional programming
// arr filter - every  - join 
// str includes
//switch

