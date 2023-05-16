function shopping(input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuBought = gpuCount * 250;
    let cpuPrice = gpuBought * 0.35;
    let cpuBought = cpuCount * cpuPrice;
    let ramPrice = gpuBought * 0.1;
    let ramBought = ramCount * ramPrice;
    let finalPrice = gpuBought + cpuBought + ramBought;

    if (gpuCount > cpuCount) {
        finalPrice -= finalPrice * 0.15;
    }


    if (budget >= finalPrice) {
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`)
    }
}


shopping((["920.45",

    "3",

    "1",

    "1"]));