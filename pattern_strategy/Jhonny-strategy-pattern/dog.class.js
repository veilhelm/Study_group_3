//metodos por defecto
class BarkindDefect {
  play = function () {
      return 'Funcion por defecto';
    };
  }
 //instancio funcion por defecto
  const standardbarking= new BarkindDefect();


class Dog {
    constructor(name, age, race){
        (this.name= name),(this.age = age),(this.race = race);
        this.barkingStrategy = () => '';
        this.runningStrategy = () => '';
        this.playingStrategy  = standardbarking;
    }
}

//metodos de la clase//
Dog.prototype.bark = function (){
    return this.barkingStrategy.bark;
}

Dog.prototype.run = function(){
    return this.runningStrategy.run();
}

Dog.prototype.play = function(){
    return this.playingStrategy.play();
}

//metodos de  carga de la clase //
Dog.prototype.setBarkingStrategy = function (fn) {
    this.barkingStrategy = fn;
  };
  Dog.prototype.setRunningStrategy = function (fn) {
    this.runningStrategy = fn;
  };
  Dog.prototype.setPlayingStrategy = function (fn) {
    this.playingStrategy = fn;
  };

module.exports = {
    Dog,
};