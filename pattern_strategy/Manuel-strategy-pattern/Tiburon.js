const nadoStrategies = require('./nado-strategies.js')
const cazaStrategies = require('./caza-strategies.js')
const comportamientoStrategies = require('./comportamiento-strategies.js')

class Tiburon {
    constructor(nombre, largo, color, peso) {
        this.nombre = nombre,
        this.largo = largo,
        this.color= color
        this.peso = peso
        this.nado = () => {
            nadoStrategies.nadoTodoStrategy.nado.bind(this)()
        }
        this.caza = () => {
            cazaStrategies.cazaSorpresaStrategy.caza.bind(this)()
        }
        this.comportamiento = () => {
            comportamientoStrategies.comportamientoAgresivoStrategy.comportamiento.bind(this)()
        }
    }
    setNadoStrategy(strategy) {
        this.nado = () => {
            strategy.nado.bind(this)()
        }
    }
    setCazaStrategy(strategy) {
        this.caza = () => {
            strategy.caza.bind(this)()
        }
    }
    setComportamientoStrategy(strategy) {
        this.comportamiento = () => {
            strategy.comportamiento.bind(this)()
        }
    }
}

module.exports = Tiburon