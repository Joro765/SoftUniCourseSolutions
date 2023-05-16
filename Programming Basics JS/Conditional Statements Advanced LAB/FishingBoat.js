function fishing(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);
    let finalPrice = 0;

    if (season === "Summer" || season === "Autumn") {
        if (people <= 6) {
            finalPrice = 4200 * 0.9;
        } else if (people > 6 && people <= 11) {
            finalPrice = 4200 * 0.85;
        } else if (people > 12) {
            finalPrice = 4200 * 0.75;
        }
    } else if (season === "Spring") {
        if (people <= 6) {
            finalPrice = 3000 * 0.9;
        } else if (people > 6 && people <= 11) {
            finalPrice = 3000 * 0.85;
        } else if (people > 12) {
            finalPrice = 3000 * 0.75;
        }

    } else if (season === "Winter") {
        if (people <= 6) {
            finalPrice = 2600 * 0.9;
        } else if (people > 6 && people <= 11) {
            finalPrice = 2600 * 0.85;
        } else if (people > 12) {
            finalPrice = 2600 * 0.75;
        }

    }

    if (season != "Autumn" && people % 2 == 0) {
        if (season === "Summer") {
            finalPrice = finalPrice * 0.95;
        } else if (season === "Spring") {
            finalPrice = finalPrice * 0.95;
        } else if (season === "Winter") {
            finalPrice = finalPrice * 0.95;
        }
    }


    if (budget >= finalPrice) {
        console.log(`Yes! You have ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else if (finalPrice > budget) {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva.`);
    }

}


fishing(["2000", "Winter", "13"]);