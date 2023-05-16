function movieBudget(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let costumePrice = Number(input[2]);
    let decore = budget * (10 / 100);
    let finalPrice;
    let clothes = costumePrice * people;

    if (people > 150) {
        clothes = clothes * 0.9;
    }

    finalPrice = decore + clothes;

    if (finalPrice <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - finalPrice).toFixed(2)} leva left.`);

    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalPrice - budget).toFixed(2)} leva more.`);

    }

}


movieBudget(["15437.62",

    "186",

    "57.99"])