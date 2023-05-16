function numbers(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command != "stop") {
        let currentNum = Number(command);


        if (currentNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === false) {
            nonPrimeSum += currentNum
        } else {
            primeSum += currentNum;
        }

        command = input[index];
        index++;
    }


    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}


numbers(["3",

    "9",

    "0",

    "7",

    "19",

    "4",

    "stop"])