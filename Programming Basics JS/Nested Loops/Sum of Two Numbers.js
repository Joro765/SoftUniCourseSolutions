function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isFound = false;
    let firstNum = 0;
    let secondNum = 0;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            sum = x + y;
            counter++;
            if (sum == magicNumber) {
                firstNum = x;
                secondNum = y;
                isFound = true;
                break;
            }
        }
        if (isFound === true) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${counter} (${firstNum} + ${secondNum} = ${magicNumber})`);

    } else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}


sumOfTwoNumbers(["88", "888", "1000"])