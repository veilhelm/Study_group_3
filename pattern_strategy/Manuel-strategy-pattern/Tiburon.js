const nadoStrategies = require('./nado-strategies.js')
const cazaStrategies = require('./caza-strategies.js')
const comportamientoStrategies = require('./comportamiento-strategies.js')

class Tiburon {
    constructor(largo, color, peso) {
        this.largo = largo,
        this.color= color
        this.peso = peso
        this.nado = () => {
            nadoStrategies.nadoTodoStrategy.nado()
        }
        this.caza = () => {
            cazaStrategies.cazaSorpresaStrategy.caza()
        }
        this.comportamiento = () => {
            comportamientoStrategies.comportamientoAgresivoStrategy.comportamiento()
        }
    }
    setNadoStrategy(strategy) {
        this.nado = () => {
            strategy.nado()
        }
    }
    setCazaStrategy(strategy) {
        this.caza = () => {
            strategy.caza()
        }
    }
    setComportamientoStrategy(strategy) {
        this.comportamiento = () => {
            strategy.comportamiento()
        }
    }
}

module.exports = Tiburon