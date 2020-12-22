class CazaSorpresaStrategy {
    caza() {
        console.log(`Soy ${this.nombre} y cazo con un ataque sorpresa.`)
    }
}

class CazoManadaStrategy {
    caza() {
        console.log(`Soy ${this.nombre} y cazo en equipo para acorralar a mis presas.`)
    }
}

class CazoCarronaStrategy {
    caza() {
        console.log(`Soy ${this.nombre} y cazo presas muertas, heridas o fáciles.`)
    }
}

module.exports = {
    cazaSorpresaStrategy: new CazaSorpresaStrategy(),
    cazoManadaStrategy: new CazoManadaStrategy(),
    cazoCarronaStrategy: new CazoCarronaStrategy(),
}