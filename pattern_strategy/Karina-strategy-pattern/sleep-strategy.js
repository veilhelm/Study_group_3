class SleepBed{
    sleep = function () {
      return 'The cat sleeps on the bed';
    };
  }

  class SleepFloor{
    sleep = function () {
      return 'the cat sleeps on the floor';
    };
  }  

  class SleepRug{
      sleep = function(){
          return 'the cat sleeps on the rug';
      }
  }

  const sleepBed = new SleepBed();
  const sleepFloor = new SleepFloor();
  const sleepRug = new SleepRug();

const sleepingStrategies = {
    sleepBed ,
    sleepFloor,
    sleepRug,
};

module.exports = sleepingStrategies;