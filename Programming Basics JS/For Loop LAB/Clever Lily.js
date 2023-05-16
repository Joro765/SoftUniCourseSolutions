function cleverLilly(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toyCount = 0;
    let moneySum = 10;
    let totalSavings = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            totalSavings += moneySum - 1;
            moneySum += 10;
        } else {
            toyCount += 1;
        }

    }

    totalSavings += toyCount * toyPrice;

    if (totalSavings >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavings - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavings).toFixed(2)}`);
    }

}


cleverLilly(["21",

    "1570.98",

    "3"]);