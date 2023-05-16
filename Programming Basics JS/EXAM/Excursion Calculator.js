function excursion(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];
    let price = 0;

    switch (season) {
        case "spring":
            if (peopleCount <= 5) {
                price = 50;
            } else if (peopleCount > 5) {
                price = 48;
            }
            break;
        case "summer":
            if (peopleCount <= 5) {
                price = 48.50;
            } else if (peopleCount > 5) {
                price = 45;
            }
            break;
        case "autumn":
            if (peopleCount <= 5) {
                price = 60;
            } else if (peopleCount > 5) {
                price = 49.50;
            }
            break;
        case "winter":
            if (peopleCount <= 5) {
                price = 86;
            } else if (peopleCount > 5) {
                price = 85;
            }
            break;
    }

    let groupPrice = peopleCount * price;

    if (season === "summer") {
        groupPrice *= 0.85;
    }

    if (season === "winter") {
        groupPrice *= 1.08;
    }

    console.log(`${groupPrice.toFixed(2)} leva.`);

}

excursion(["20",
    "winter"])