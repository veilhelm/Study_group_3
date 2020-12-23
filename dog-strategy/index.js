const {Dogs} = require("./class_dog")
const speedDogs = require("./dog_speeding_strategies")
const JumpDogs = require("./dog_jump_strategies")
const biteDogs = require("./dog_bite_strategies")
const toby = new Dogs(23,"black","doberman")
const luna = new Dogs(12,"white","pincher")
const zeus = new Dogs(43,"coffe","pitbull")
luna.setJumpingStrategy(JumpDogs.lowJumpStrategies)
toby.setSpeedingStrategy(speedDogs.veryFastStrategies)
zeus.setBitingStrategy(biteDogs.dogBitetStrategies)
console.log(zeus.bite())
