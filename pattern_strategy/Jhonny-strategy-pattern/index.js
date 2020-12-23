const { Dog } = require('./dog.class');
const playingStrategies = require('./dog.playing.strategies');
const runningStrategies = require('./dog.running.strategies');
const barkingStrategies = require('./dog.barking.strategies');

const miPerro = new Dog("PEPE", 5, 'cocker');
//llamo a la funcion por defecto
console.log(miPerro.play()); 

miPerro.setPlayingStrategy(playingStrategies.parkplaying);
console.log(miPerro.play());

miPerro.setRunningStrategy(runningStrategies.houserunning);
console.log(miPerro.run());

miPerro.setBarkingStrategy(barkingStrategies.housebarking);
console.log(miPerro.bark());