function sumNumbers(input) {
    let numbers = String(input[0]);
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let n = Number(numbers[i]);
        sum += n;
    }

    console.log(`The sum of the digits is:${sum}`);

}

sumNumbers(["564891"]);