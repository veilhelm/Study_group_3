const LowJumpStrategies = function (){
    this.jump = function(){
        return "the dog jumps little"
    }
}
const JumpHightStrategies = function (){
    this.jump = function(){
        return "the dog jumps more"
    }
}
const lowJumpStrategies = new LowJumpStrategies()
const jumpHightStrategies = new JumpHightStrategies()

const JumpDogs = {
    lowJumpStrategies,
    jumpHightStrategies
}
module.exports = JumpDogs