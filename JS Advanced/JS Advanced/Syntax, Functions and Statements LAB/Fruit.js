function solve(fruit, amount, price) {

    let amountKG = amount / 1000;

    let totalPrice = amountKG * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${amountKG.toFixed(2)} kilograms ${fruit}.`);

}


solve('orange', 2500, 1.8)