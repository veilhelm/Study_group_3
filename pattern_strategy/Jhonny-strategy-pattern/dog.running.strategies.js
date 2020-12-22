//estrategia correr
class CityRunning {
    run = function () {
      return `this dog  is running in the city`;
    };
  }
  const ParkRunning = function () {
    this.run = () => {
      return `this dog  is running in the park`;
    };
  };
  const HouseRunning = function () {
    this.run = function () {
      return `this dog  is running in the house`;
    };
  };
  
  const cityrunning = new CityRunning();
  const parkRunning = new ParkRunning();
  const houserunning = new HouseRunning();
  
  const runningStrategies = {
    cityrunning,
    parkRunning,
    houserunning,
  };
  
  module.exports = runningStrategies;