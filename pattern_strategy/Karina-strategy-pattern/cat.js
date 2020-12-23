class Cat {
    constructor(name, size, color) {
      (this.name = name), (this.size = size), (this.color = color);
      this.meowingStrategy = () => '';
      this.huntingStrategy = () => '';
      this.sleepingStrategy = () => '';
    }
  }


  Cat.prototype.meow = function () {
    return this.meowingStrategy.meow();
  };

  Cat.prototype.hunt= function(){
    return this.huntingStrategy.hunt();
  };

  Cat.prototype.sleep = function(){
      return this.sleepingStrategy.sleep();
  }



  Cat.prototype.setMeowingStrategy = function (fn) {
    this.meowingStrategy = fn;
  };

  Cat.prototype.setHuntingStrategy = function (fn) {
    this.huntingStrategy = fn;
  };

  Cat.prototype.setSleepingStrategy= function (fn) {
    this.sleepingStrategy = fn;
  };

  module.exports = {
    Cat,
  };