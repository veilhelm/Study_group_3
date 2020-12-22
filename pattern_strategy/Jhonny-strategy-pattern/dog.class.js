class StandardPlaying {
    play = function () {
      return 'this creature play in a standard way';
    };
  }

  class StandardRunning {
    run = function () {
      return 'this creature run in a standard way';
    };
  }
  
  const standardPlaying = new StandardPlaying();
  const standardRunning = new StandardRunning();

class Dog {
    constructor(name, age, race){
        (this.name= name),(this.age = age),(this.race = race);
        this.barkingStrategy = standardPlaying;
        this.runningStrategy = standardRunning;
        this.playingStrategy = () => '';
    }
}

//__________methodos activos de la clase________________//
Dog.prototype.bark = function (){
    return this.barkingStrategy.bark();
}

Dog.prototype.run = function(){
    return this.runningStrategy.run();
}

Dog.prototype.play = function(){
    return this.playingStrategy.play();
}

//metodos de configuración de nuestra clase__________________//
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