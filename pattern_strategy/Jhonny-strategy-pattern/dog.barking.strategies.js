//estrategia ladrar
class HouseBarking {
    bark = function () {
      return `this dog ${this.name} is barking in the house`;
    };
  }
  const ParkBarking = function () {
    this.bark = () => {
      return `this dog  ${this.name} is barking in the park`;
    };
  };
  const thiefBarking = function () {
    this.bark = function () {
      return `this dog  is barking in the thief`;
    };
  };
  
  const housebarking = new HouseBarking;
  const parkbarking = new ParkBarking();
  const thiefbarking = new thiefBarking();
  
  const barkingStrategies = {
    housebarking,
    parkbarking,
    thiefbarking,
  };
  
  module.exports = barkingStrategies;