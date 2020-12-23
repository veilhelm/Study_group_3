const SlowSpeedStrategies = function (){
    this.speed = function(){
        return "the dog is slow"
    }
}
const VeryFastStrategies = function (){
    this.speed = function(){
        return "the dog is very fast"
    }
}
const slowSpeedStrategies = new SlowSpeedStrategies()
const veryFastStrategies = new VeryFastStrategies ()

const SpeedDogs = {
    slowSpeedStrategies,
    veryFastStrategies
}
module.exports = SpeedDogs