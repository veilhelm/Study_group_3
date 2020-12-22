const { Duck } = require('./duck.class');
const walkingStrategies = require('./duck.walking.strategies');

const mauricio = new Duck(30, 'black', 'wild');
console.log(mauricio.walk());

//a lot of code with mauricio
mauricio.setWalkingStrategy(walkingStrategies.normalWalking);
console.log(mauricio.walk());
