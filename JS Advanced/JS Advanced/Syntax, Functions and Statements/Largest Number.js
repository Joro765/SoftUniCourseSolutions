function largestNumber(a, b, c) {

    let arr = [a, b, c];

    let result = a;

    for (let num of arr) {
        let currentLargestNumber = result;

        if (num > currentLargestNumber) {
            result = num;
        }
    }

    console.log(`The largest number is ${result}.`);
}


largestNumber(100, 30, 16)