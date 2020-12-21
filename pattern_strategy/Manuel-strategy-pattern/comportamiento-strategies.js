class ComportamientoAgresivoStrategy {
    comportamiento() {
        console.log('Yo soy muy agresivo.')
    }
}

class ComportamientoSigilosoStrategy {
    comportamiento() {
        console.log('Yo me comporto de una forma sigilosa.')
    }
}

class ComportamientoCuriosoStrategy {
    comportamiento() {
        console.log('Yo soy muy curioso.')
    }
}

module.exports = {
    comportamientoAgresivoStrategy: new ComportamientoAgresivoStrategy(),
    comportamientoSigilosoStrategy: new ComportamientoSigilosoStrategy(),
    comportamientoCuriosoStrategy: new ComportamientoCuriosoStrategy(),
}