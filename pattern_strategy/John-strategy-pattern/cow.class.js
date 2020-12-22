//-- Definicion de la clase con los respectivos --//
//-- atributos y metodos para las estrategia ---//
class Cow {
    constructor(name, race, age) {
        (this.name = name), (this.race = race), (this.age = age);
        this.eatingStrategy = () => "";
        this.milkingStrategy = () => "";
        this.parentingStrategy = () => "";
    };
};

//-- Metodos para comer --//
Cow.prototype.eat = function() {
    return this.eatingStrategy.eat()
};
Cow.prototype.milkCow = function() {
    return this.milkingStrategy
};
Cow.prototype.birth = function(v) {
    return this.parentingStrategy.brith(v)
};


//-- Metodos 
Cow.prototype.setEatingStrategy = function(nameFunction) {
    this.eatingStrategy = nameFunction
};
Cow.prototype.setMilkingStrategy = function(nameFunction) {
    this.milkingStrategy = nameFunction.milkCow()
};
Cow.prototype.setParentingingStrategy = function(nameFunction) {
    this.parentingStrategy = nameFunction
};


module.exports = {
    Cow,
}