class ComportamientoAgresivoStrategy {
    comportamiento() {
        console.log(`Soy ${this.nombre} y soy muy agresivo.`)
    }
}

class ComportamientoSigilosoStrategy {
    comportamiento() {
        console.log(`Soy ${this.nombre} y soy sigiloso.`)
    }
}

class ComportamientoCuriosoStrategy {
    comportamiento() {
        console.log(`Soy ${this.nombre} y soy muy curioso.`)
    }
}

module.exports = {
    comportamientoAgresivoStrategy: new ComportamientoAgresivoStrategy(),
    comportamientoSigilosoStrategy: new ComportamientoSigilosoStrategy(),
    comportamientoCuriosoStrategy: new ComportamientoCuriosoStrategy(),
}