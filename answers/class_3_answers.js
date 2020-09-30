// dado un string de letras random. diganme cual es la letra que más se repite consecutivamente en ese string
// ejemplo
//input = "asggbbbcsdwddddwwwwww"
//output = w

//input= "aabcaaacdaaakaajvdaaavvvvvvv"
//output= v


/////// JOHN/////////////////
function letraRepetida(cadena) {
    const ArregloString = cadena.split("")
    let masrepetida = { letra: "", repetidciones: 1 }
    let contador = 0

    for (let [indice, valor] of ArregloString.entries()) {
        let valor2 = ArregloString[indice + 1]
        contador = (valor === valor2) ? contador += 1 : 0
        if (valor === valor2 && masrepetida.repetidciones <= contador) masrepetida.letra = valor, masrepetida.repetidciones += 1
    }
    respuesta = (masrepetida.letra + " se repite: " + masrepetida.repetidciones)
    return respuesta
}

console.log(letraRepetida("asggggggggbbbcsdwddddwwwwww"))

////// KARINA//////////////


const conteo_general = (conteostring) => {
    let contador = 0
    const arreglo = conteostring.split("")
    let letras = 0
    let repetir = 1

    for (let [index, leter] of arreglo.entries()) {
        let siguiente = arreglo[index + 1]
        if (leter === siguiente) contador += 1
        else contador = 0
        if (contador >= repetir && leter === siguiente) letras = leter, repetir += 1
    }
    console.log(letras, repetir)
}
conteo_general("aabcaaacdaaakaajvdaaavvvvvvv")