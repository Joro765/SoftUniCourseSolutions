function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let finalPrice = 0;
    let destination;
    let place;

    if (budget <= 100) {
        if (season === "summer") {
            finalPrice = budget * 0.3;
            destination = "Bulgaria";
            place = "Camp";
        } else {
            finalPrice = budget * 0.7;
            place = "Hotel";
            destination = "Bulgaria";
        }
    } else if (budget <= 1000) {
        if (season === "summer") {
            finalPrice = budget * 0.4;
            destination = "Balkans";
            place = "Camp";
        } else {
            finalPrice = budget * 0.8;
            destination = "Balkans";
            place = "Hotel";
        }
    } else if (budget > 1000) {
        finalPrice = budget * 0.9;
        destination = "Europe";
        place = "Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${finalPrice.toFixed(2)}`);

}


journey(["1500", "summer"]);
