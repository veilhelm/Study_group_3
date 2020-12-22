//metodos por defecto
class BarkindDefect {
  bark = function () {
      return 'Funcion por defecto';
    };
  }
 //instancio funcion por defecto
  const standardBarking= new BarkindDefect();


class Dog {
    constructor(name, age, race){
        (this.name= name),(this.age = age),(this.race = race);
        this.barkingStrategy = standardBarking;
        this.runningStrategy = () => '';
        this.playingStrategy = () => '';
    }
}

//metodos de la clase//
Dog.prototype.bark = function (){
    return this.barkingStrategy.bark.bind(this);
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