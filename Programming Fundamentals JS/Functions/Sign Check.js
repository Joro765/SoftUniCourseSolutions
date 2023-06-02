function checkSumSign(numOne, numTwo, numThree) {
    let result;
    let arr = [numOne, numTwo, numThree];
    let isPositive = true;
    let negativeCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++;
        }
    }

    if (negativeCount === 0 || negativeCount === 2) {
        isPositive = true;
        result = true;
    } else {
        isPositive = false;
        result = false;
    }

    function printResult(value) {
        if (value) {
            console.log("Positive");
        } else {
            console.log("Negative");
        }
    }

    printResult(result);


}



checkSumSign(-2, -4, -4);