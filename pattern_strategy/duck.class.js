//standard_strategies//
class StandardWalking {
  walk = function () {
    return 'this creature walks in a standard way';
  };
}

const standardWalking = new StandardWalking();

class Duck {
  constructor(size, color, type) {
    (this.size = size), (this.color = color), (this.type = type);
    this.walkingStrategy = standardWalking;
    this.flyingStrategy = () => '';
    this.quackingStrategy = () => '';
  }
}
//__________methodos activos de la clase________________//
Duck.prototype.walk = function () {
  return this.walkingStrategy.walk();
};
Duck.prototype.fly = function () {
  return this.flyingStrategy.fly();
};
Duck.prototype.quack = function () {
  return this.quackingStrategy.quack();
};

//metodos de configuración de nuestra clase__________________//
Duck.prototype.setWalkingStrategy = function (fn) {
  this.walkingStrategy = fn;
};
Duck.prototype.setFlyingStrategy = function (fn) {
  this.flyingStrategy = fn;
};
Duck.prototype.setQuackingStrategy = function (fn) {
  this.quackingStrategy = fn;
};

module.exports = {
  Duck,
};

// const mauricio = new Duck()
// mauricio.walk()
