function beerAndChips(input) {
    let name = input[0];
    let budget = Number(input[1]);
    let beersCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    let beersPrice = beersCount * 1.20;

    let pricePerChips = beersPrice * 0.45;
    let chipsPrice = chipsCount * pricePerChips;

    chipsPrice = Math.ceil(chipsPrice);

    let total = beersPrice + chipsPrice;


    if (budget >= total) {
        console.log(`${name} bought a snack and has ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${(total - budget).toFixed(2)} more leva!`);
    }


}




beerAndChips(["George",
    "10",
    "2",
    "3"])


