// declaramos funcion 
class Dogs {
    constructor(size,color,type){
    (this.size = size), (this.color = color),(this.color = type);
    this.speedingStrategy = () => ""
    this.jumpingStrategy = () => ""
    this.bitingStrategy = () => ""

    }
}
// declaramos los metodos
Dogs.prototype.speed = function(){
 return this.speedingStrategy.speed()
}
Dogs.prototype.jump = function(){
 return this.jumpingStrategy.jump()
}
Dogs.prototype.bite = function(){
 return this.bitingStrategy.bite()
}
// exportamos la clase
module.exports = {
    Dogs,
}
const toby = new Dogs()

// setear las funciones

Dogs.prototype.setSpeedingStrategy = function(fn){
    this.speedingStrategy = fn
}

Dogs.prototype.setJumpingStrategy = function(fn){
    this.jumpingStrategy = fn
}

Dogs.prototype.setBitingStrategy = function(fn){
    this.bitingStrategy = fn
}