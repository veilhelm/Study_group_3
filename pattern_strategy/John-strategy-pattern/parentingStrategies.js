const BreedingCow = function() {
    this.birth = (va) => {
        console.log("La vaca va para crianza " + va);
    }
}
const SlaughterhouseCow = function() {
    this.birth = (va) => {
        console.log("vaca para crecimiento " + va);
    }
}
const Bullfights = function() {
    this.brith = (va) => {
        console.log("va para corrida de toros " + va);
    }
}

module.exports = {
    breedingCow: new BreedingCow(),
    slaughterhouseCow: new SlaughterhouseCow(),
    bullfights: new Bullfights(),
}