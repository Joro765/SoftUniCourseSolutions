function energyBooster(input) {
    let flavour = input[0];
    let size = input[1];
    let buyCount = Number(input[2]);
    let pricePerPiece = 0;

    switch (flavour) {
        case "Watermelon":
            if (size === "small") {
                pricePerPiece = 112;
            } else {
                pricePerPiece = 143.50;
            }
            break;
        case "Mango":
            if (size === "small") {
                pricePerPiece = 73.32;
            } else {
                pricePerPiece = 98;
            }
            break;
        case "Pineapple":
            if (size === "small") {
                pricePerPiece = 84.20;
            } else {
                pricePerPiece = 124;
            }
            break;
        case "Raspberry":
            if (size === "small") {
                pricePerPiece = 40;
            } else {
                pricePerPiece = 76;;
            }
            break;
    }


    let totalPrice = pricePerPiece * buyCount;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        totalPrice *= 0.5;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);

}


energyBooster(["Pineapple",
    "small",
    "1"]);