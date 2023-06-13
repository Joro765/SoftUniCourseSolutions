function bombNumbers(numbers, command) {
    let bombNumber = command[0];
    let bombNumberPower = command[1];

    let arrLength = numbers.length;

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if (currentNumber === bombNumber) {
            let start = i - bombNumberPower;
            if (start < 0) {    // To prevent negative number for index
                start = 0
            }
            let count = bombNumberPower * 2 + 1;
            numbers.splice(start, count);
            i = 0;
        }
    }

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    console.log(sum);
}

bombNumbers([1, 4, 4, 2, 8, 9,
    1],
    [9, 3])