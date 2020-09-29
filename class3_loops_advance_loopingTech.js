
//nivel 1
const line = ["alex", "edwin", "amalia", "john"]

line.push("karina")

for(let i = 0 ; i < line.length ; i++ ){
    console.log(line[i + 1])
}

line.forEach( name => console.log(name))


//nivel 2 

const matrix = [[4, 4], [2, 2], [4, 5, 5, 2], [2,5,4]]
const average= []

for(let i = 0; i < matrix.length ; i++){
    let sum = 0
    for(let j = 0; j < matrix[i].length ; j++){
        sum += matrix[i][j]
    }
    average.push(sum/matrix[i].length)
}

// se debe iterar sobre cada uno de los  elementos que se consideran estudiantes
// luego se debe crear una variable suma donde voy a incrementar su valor con relación a las calificaciones
// luego saco el promedio 
// le hago un push a un array

// luego saco el promedio 
// le hago un push a un array

// luego saco el promedio 
// le hago un push a un array

const average2 = matrix.map( student => {
    let sum = 0
    student.forEach( score => {
        sum += score
    })
    return sum/student.length
})

console.log(average2)

//array methods
// push forEach map join 

//array properties
// length

//level 3 

//(RGBA) Red 0 255 green 0 255 blue 0 255 alfa transparencia 

//  RR = R
//  GG = G
//  BB = B
//  RG = B
//  BG = R

//RG
//  GG = G
//  BB = B
//  RG = B
//  BG = R

// RGBBRG
//  BG = R

// RGBBRG
//  BG = R

// RGBBRG
//  GG = G
//  BB = B
//  RG = B
//  BG = R

// RGBBRG


// si los dos colores son iguales el siguente es igual
// si son diferentes se retorna el que falta (RGBRGRBRBBGRBGRGBGGRBG)

//for of --- entries-- recursion

const lastLetterRGB = (RGBstring) => {
    const RGBarr = RGBstring.split("")
    const finalArr = []
    for(let [index, leter] of RGBarr.entries()){
        let nextLeter = RGBarr[index + 1 ]
        if(!nextLeter) break
        if(leter === nextLeter) finalArr.push(leter)
        if(leter !== nextLeter) finalArr.push(["R","G","B"].filter( marker => ![leter, nextLeter].includes(marker)).join(""))
    }
    if(finalArr.length > 1) lastLetterRGB(finalArr.join(""))
    if(finalArr.length === 1) return finalArr.join("")
}

lastLetterRGB("RGBRGRBRBBGRBGRGBGGRBG")


//implicit cohersion 
// en situaciones donde el codigo esté esperando un boolean y yo le pase otro tipo de variable, tendrá los siguientes comportamientos:
// Number true
// objeto true
// arr true
// undefined false
// null false 
// string true 


//Array methods filter join includes push entries map forEach 
//String methods split 
// for básico, for anidado, for of (entries)
//sintaxis de arrays de arrays const arrayExample = [[1,2],[2,3,5]]  arrayExample[1][1]
// el RGBA o los colores en la internet
// break
// gitflow como subir correctamente mi código a mi rama










































