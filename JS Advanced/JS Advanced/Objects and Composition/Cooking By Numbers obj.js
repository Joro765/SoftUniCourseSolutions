function solve(...operations) {

    // inital num
    let num = Number(operations.shift());

    // Object with functions (kinda like a switch)
    let calculate = {
        chop: function (x) {
            return x / 2;
        },
        dice: function (x) {
            return Math.sqrt(x);
        },
        spice: function (x) {
            return x + 1;
        },
        bake: function (x) {
            return x * 3;
        },
        fillet: function (x) {
            return x * 0.8;
        }
    }

    // Викам си обекта с команда от масива с команди и подавам аргумент за функцията
    for (let operation of operations) {
        num = calculate[operation](num);
        console.log(num);

    }
}



solve('9', 'dice', 'spice', 'chop', 'bake',

    'fillet')