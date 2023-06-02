function orderPrice(product, amount) {
    let price = 0;
    let total = 0;

    switch (product) {
        case "coffee": price = 1.50; break;
        case "water": price = 1; break;
        case "coke": price = 1.40; break;
        case "snacks": price = 2; break;
        default: console.log("ERROR");
    }

    total = price * amount;

    console.log(total.toFixed(2));
}

orderPrice("coke", 2)