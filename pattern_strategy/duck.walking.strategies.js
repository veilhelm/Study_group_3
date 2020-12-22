class NormalWalking {
  walk = function () {
    return `this duck walks normal`;
  };
}
const WildWalking = function () {
  this.walk = () => {
    return `this duck walks Wild`;
  };
};
const CityWalking = function () {
  this.walk = function () {
    return `this duck walks like a person`;
  };
};

const normalWalking = new NormalWalking();
const wildWalking = new WildWalking();
const cityWalking = new CityWalking();

const walkingStrategies = {
  normalWalking,
  wildWalking,
  cityWalking,
};

module.exports = walkingStrategies;
