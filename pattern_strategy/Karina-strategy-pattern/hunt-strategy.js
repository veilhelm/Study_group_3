class HuntRabbit{
    hunt = function () {
      return 'The cat hunts a rabbit';
    };
  }

  class HuntMouse{
    hunt = function () {
      return 'The cat hunts a mouse';
    };
  }  

  class HuntBird{
      hunt = function(){
          return 'The cat hunts a bird';
      }
  }

  const huntRabbit = new HuntRabbit();
  const huntMouse = new HuntMouse();
  const huntBird = new HuntBird();

const huntingStrategies = {
    huntRabbit,
    huntMouse,
    huntBird,
};

module.exports = huntingStrategies;