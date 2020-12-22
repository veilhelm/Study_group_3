const EatingAfternoon = function() {
    this.eat = () => {
        return " La vaca come por la tarde"
    }
}
const EatingMorning = function() {
    this.eat = () => {
        return `La vaca esta comiendo por la mañana ${this.nombre}`
    }
}
const EatintNight = function() {
        this.eat = () => {
            return " La vaca esta cenando"
        }
    }
    // ---- instancias de las estrategias  -----//
const eatingMorning = new EatingMorning();
const eatingAfternoon = new EatingAfternoon();
const eatingNigth = new EatintNight();

const eatingStrategies = {
    eatingMorning,
    eatingAfternoon,
    eatingNigth,
}
module.exports = eatingStrategies