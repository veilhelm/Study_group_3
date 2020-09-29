//crear una clase pato que va a tener las propiedades tamaño, color, edad
// crear dos subclases de patos (salvaje, ciudad)
//pato salvaje va a tener un método cazar
//pato ciudad va a tener el método pedirComida
// crear 5 patos salvajes y 5 patos de ciudad 

//crear usarios de uber que tienen las propiedades nombre, edad, telefono
//crear la subclase conductor que tiene el método conducir 
//crear la subclase cliente que tiene el metodo pedirUber 
//crear 5 conductores y 5 clientes 

//por lo menos en uno de los métodos apliquemos condicionales && || === !== 
//bonus (usar operador ternario) (valuación debe ser un boolean) ? caso si true : caso si false

//console log 20 objetos con sus métodos


//  ----------------------- Class Ducks ----------------  //
class duck {
    constructor(size, colour, age) {
        this.size = size,
            this.colour = colour,
            this.age = age
    }
}
class wild_duck extends duck {
    constructor(size, colour, age, hunt) {
        super(size, colour, age)
        this.hunt = hunt
    }
}
class city_duck extends duck {
    constructor(size, colour, age, order_food) {
        super(size, colour, age)
        this.order_food = order_food
    }
}
city_duck.prototype.supplicate = function(eating) {
    return eating ? "Have overweight" : "This diet"
}

wild_duck.prototype.hunter = function(hunting) {
    return hunting ? "The duck is healthy" : "It's going to die"
}

const duck1 = new wild_duck(45, "red", 5, true)
const duck2 = new wild_duck(20, "orange", 4, true)
const duck3 = new wild_duck(30, "pink", 3, false)
const duck4 = new wild_duck(90, "blue", 20, true)
const duck5 = new wild_duck(10, "yellow", 40, false)

const ducka = new city_duck(10, "black", 10, false)
const ducke = new city_duck(40, "yellow", 80, true)
const ducki = new city_duck(45, "purple", 3, false)
const ducko = new city_duck(80, "white", 15, true)
const ducku = new city_duck(15, "gray", 1, false)

const array_ducks = [duck1, duck2, duck3, duck4, duck5]
const array_ducks2 = [ducka, ducke, ducki, ducko, ducku]

array_ducks.forEach(to_print => console.log(to_print.size, to_print.colour, to_print.age, to_print.hunter(to_print.hunt)))
array_ducks2.forEach(to_print => console.log(to_print.size, to_print.colour, to_print.age, to_print.supplicate(to_print.order_food)))


// -------------------    Uber users  --------------  //

class user {
    constructor(name, age, phone_number) {
        this.name = name,
            this.age = age,
            this.phone_number = phone_number
    }
}
class driver extends user {
    constructor(name, age, phone_number, driving) {
        super(name, age, phone_number)
        this.driving = driving
    }
}
class client extends user {
    constructor(name, age, phone_number, ask) {
        super(name, age, phone_number)
        this.ask = ask
    }
}

client.prototype.AskFor = function(validate) {
    return (validate) ? "ask Uber" : "No order"
}
driver.prototype.IsDriving = function(validate) {
    return (validate) ? "Yes, Driving" : "no, Resting"
}
const userDriver1 = new driver("Luis", 25, 321654, true)
const userDriver2 = new driver("Gerardo", 35, 987654, false)
const userDriver3 = new driver("Antonia", 27, 654321, true)
const userDriver4 = new driver("Camila", 28, 123789, false)
const userDriver5 = new driver("francisco", 21, 789456, true)

const array_userDriver = [userDriver1, userDriver2, userDriver3, userDriver4, userDriver5]
array_userDriver.forEach(person => console.log(person.name, person.age, person.phone_number, person.IsDriving(person.driving)))

const userClienta = new client("Maria", 18, 987654, true)
const userClientb = new client("Fernanda", 28, 987654, false)
const userClientc = new client("Andres", 24, 987654, true)
const userClientd = new client("Cristian", 45, 987654, false)
const userCliente = new client("Alison", 31, 987654, true)

const array_Client = [userClienta, userClientb, userClientc, userClientd, userCliente]
array_Client.forEach(person => console.log(person.name, person.age, person.phone_number, person.AskFor(person.ask)))