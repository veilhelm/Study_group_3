const NoBitteStrategies = function (){
    this.bite = function(){
        return "the dog does not bite"
    }
}
const DogBitetStrategies = function (){
    this.bite = function(){
        return "the dog bite"
    }
}
const noBitteStrategies = new NoBitteStrategies()
const dogBitetStrategies = new DogBitetStrategies()

const biteDogs = {
    noBitteStrategies,
    dogBitetStrategies
}
module.exports = biteDogs