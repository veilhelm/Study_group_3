//estrategia jugar

class HousePlaying {
    play = function () {
      return `this dog ${this.name} is playing in the house`;
    };
  }
  const ParkPlaying = function () {
    this.play = () => {
      return `this dog  ${this.name} is playing in the park`;
    };
  };
  const RunPlaying = function () {
    this.play = function () {
      return `this dog ${this.name} is playing in the run`;
    };
  };
  
  const houseplaying = new HousePlaying;
  const parkplaying = new ParkPlaying();
  const runplaying = new RunPlaying();
  
  const playingStrategies = {
    houseplaying,
    parkplaying,
    runplaying,
  };
  
  module.exports = playingStrategies;