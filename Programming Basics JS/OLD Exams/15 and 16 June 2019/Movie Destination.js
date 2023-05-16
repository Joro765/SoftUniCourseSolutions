function movieDestionation(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let price = 0;

    if (season === "Winter") {
        if (destination === "Dubai") {
            price = 45000;
        } else if (destination === "Sofia") {
            price = 17000;
        } else if (destination === "London") {
            price = 24000;
        }
    } else if (season === "Summer") {
        if (destination === "Dubai") {
            price = 40000;
        } else if (destination === "Sofia") {
            price = 12500;
        } else if (destination === "London") {
            price = 20250;
        }
    }

    let totalPrice = price * days;

    if (destination === "Dubai") {
        totalPrice = totalPrice - (totalPrice * 0.3);
    }

    if (destination === "Sofia") {
        totalPrice = totalPrice + (totalPrice * 0.25);
    }

    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(totalPrice - budget).toFixed(2)} leva more!`);
    }

}


movieDestionation(["400000",
    "Sofia",
    "Winter",
    "20"])