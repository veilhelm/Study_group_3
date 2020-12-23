const { Cat } = require('./cat');
const meowingStrategies = require('./meow-strategy');
const huntingStrategies = require('./hunt-strategy');
const sleepingStrategies = require('./sleep-strategy')

const gatito1 = new Cat('titania', 'mediano', 'gris');

gatito1.setMeowingStrategy(meowingStrategies.meowHappy)
console.log(gatito1.meow());

gatito1.setHuntingStrategy(huntingStrategies.huntRabbit)
console.log(gatito1.hunt());

gatito1.setSleepingStrategy(sleepingStrategies.sleepBed)
console.log(gatito1.sleep());