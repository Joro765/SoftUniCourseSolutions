function accountBalance(input) {
    let index = 0;
    let sum = 0;

    while (input[index] !== "NoMoreMoney") {
        let currentSum = Number(input[index]);
        index++;

        if (currentSum < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log(`Increase: ${currentSum.toFixed(2)}`);
            sum += currentSum
        }
    }

    console.log(`Total: ${sum.toFixed(2)}`)

}

accountBalance(["5.51",

    "69.42",

    "100",

    "NoMoreMoney"])