function maxNumber(arr) {

    let arrayLength = arr.length;
    let bigNumbers = [];

    for (let index = 0; index < arrayLength; index++) {
        let currentNum = arr[index];
        let isBigger = true;

        for (let x = index + 1; x < arrayLength; x++) {

            if (currentNum <= arr[x]) {
                isBigger = false;
                break;
            }
        }

        if (isBigger === true) {
            bigNumbers.push(currentNum);
        }
    }
    console.log(bigNumbers.join(" "));
}


maxNumber([27, 19, 42, 2, 13, 45, 48])