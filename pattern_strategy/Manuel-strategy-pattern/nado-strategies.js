class NadoProfundidadStrategy {
    nado() {
        console.log('Yo nado en las profundidades del mar.')
    }
}

class NadoBajoStrategy {
    nado() {
        console.log('Yo nado en aguas poco profundas.')
    }
}

class NadoTodoStrategy {
    nado() {
        console.log('Me gusta nadar por todo lado.')
    }
}

module.exports = {
    nadoProfundidadStrategy: new NadoProfundidadStrategy(),
    nadoBajoStrategy: new NadoBajoStrategy(),
    nadoTodoStrategy: new NadoTodoStrategy(),
}