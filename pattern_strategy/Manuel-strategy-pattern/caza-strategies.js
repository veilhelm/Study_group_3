class CazaSorpresaStrategy {
    caza() {
        console.log('Yo cazo con un ataque sorpresa.')
    }
}

class CazoManadaStrategy {
    caza() {
        console.log('Yo cazo en equipo para acorralar a mis presas.')
    }
}

class CazoCarronaStrategy {
    caza() {
        console.log('Yo cazo presas muertas, heridas y presas fáciles.')
    }
}

module.exports = {
    cazaSorpresaStrategy: new CazaSorpresaStrategy(),
    cazoManadaStrategy: new CazoManadaStrategy(),
    cazoCarronaStrategy: new CazoCarronaStrategy(),
}