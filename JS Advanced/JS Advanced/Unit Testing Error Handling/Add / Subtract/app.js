function createCalculator() {

    let value = 0;

    return {

        add: function (num) { value += Number(num); },

        subtract: function (num) { value -= Number(num); },

        get: function () { return value; }

    }

}


let commander = createCalculator();
console.log(commander.value);
console.log(commander.get());


module.exports = {
    createCalculator
}