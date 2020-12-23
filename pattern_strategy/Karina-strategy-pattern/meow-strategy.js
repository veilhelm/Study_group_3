class MeowHappy{
    meow = function () {
      return 'The cat is happy';
    };
  }

  class MeowScared{
    meow = function () {
      return 'The cat is scared';
    };
  }  

  class MeowSad{
      meow = function(){
          return 'The cat is sad';
      }
  }

  const meowHappy = new MeowHappy();
  const meowScared = new MeowScared();
  const meowSad = new MeowSad();

const meowingStrategies = {
  meowHappy,
  meowScared,
  meowSad,
};

module.exports = meowingStrategies;