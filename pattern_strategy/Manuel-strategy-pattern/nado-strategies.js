class NadoProfundidadStrategy {
    nado() {
        console.log(`Soy ${this.nombre} y nado en las profundidades del mar.`)
    }
}

class NadoBajoStrategy {
    nado() {
        console.log(`Soy ${this.nombre} y nado en aguas poco profundas.`)
    }
}

class NadoTodoStrategy {
    nado() {
        console.log(`Soy ${this.nombre} y me gusta nadar por todo lado.`)
    }
}

module.exports = {
    nadoProfundidadStrategy: new NadoProfundidadStrategy(),
    nadoBajoStrategy: new NadoBajoStrategy(),
    nadoTodoStrategy: new NadoTodoStrategy(),
}