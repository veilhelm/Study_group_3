class MilkingAfternoon {
    milkCow() {
        console.log("La vaca se ordeña en la tarde");
    }
}
class MilkingMorning {
    milkCow() {
        console.log("La vaca se ordeña en la mañana");
    }
}
class MilkingNight {
    milkCow() {
        console.log("La vaca se ordeña en la noche");
    }
}


const milkingAfternoon = new MilkingAfternoon()
const milkingMorning = new MilkingMorning()
const milkingNight = new MilkingNight()


module.exports = {
    milkingAfternoon,
    milkingMorning,
    milkingNight
}