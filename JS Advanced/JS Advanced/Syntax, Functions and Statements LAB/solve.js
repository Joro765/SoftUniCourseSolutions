function solve(fruit, grams, pricePerKG) {

    let weigthInKG = grams / 1000;

    let price = weigthInKG * pricePerKG;

    console.log(`I need ${price.toFixed(2)} to buy ${weigthInKG.toFixed(2)} kilograms ${fruit}.`);

}


solve('orange', 2500, 1.80)