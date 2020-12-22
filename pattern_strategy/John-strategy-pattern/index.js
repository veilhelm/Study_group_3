const { Cow } = require("./cow.class")
const eatingStrategies = require("./eatingStrategies")
const milkingStrategies = require("./milkingStrategies")
const parentingStrategies = require("./parentingStrategies")

const muu = new Cow("margarita", "blanca", 4)

muu.setEatingStrategy(eatingStrategies.eatingMorning)
console.log(muu.eat())


muu.setMilkingStrategy(milkingStrategies.milkingMorning)
muu.milkCow()

muu.setParentingingStrategy(parentingStrategies.bullfights)
muu.birth("jj")