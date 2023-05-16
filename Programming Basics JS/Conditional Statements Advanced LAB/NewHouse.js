function gardening(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;
    let discount = 0;

    switch (flowerType) {
        case "Roses":
            if (flowerCount > 80) {
                discount = (flowerCount * 5) * 0.1
                totalPrice = (flowerCount * 5) - discount;
            } else {
                totalPrice = flowerCount * 5;
            }
            break;
        case "Dahlias":
            if (flowerCount > 90) {
                discount = (flowerCount * 3.80) * 0.15;
                totalPrice = (flowerCount * 3.80) - discount;
            } else {
                totalPrice = flowerCount * 3.80;
            }
            break;
        case "Tulips":
            if (flowerCount > 80) {
                discount = (flowerCount * 2.80) * 0.15;
                totalPrice = (flowerCount * 2.80) - discount;
            } else {
                totalPrice = flowerCount * 2.80;
            }
            break;
        case "Narcissus":
            if (flowerCount < 120) {
                discount = (flowerCount * 3) * 0.15;
                totalPrice = (flowerCount * 3) + discount;
            } else {
                totalPrice = flowerCount * 3;
            }
            break;
        case "Gladiolus":
            if (flowerCount < 80) {
                discount = (flowerCount * 2.50) * 0.20;
                totalPrice = (flowerCount * 2.50) + discount;
            } else {
                totalPrice = flowerCount * 2.50;
            }
            break;
    }

    if (totalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }

}

gardening(["Tulips",

    "88",

    "260"]);


