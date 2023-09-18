function solve(numbers) {

    let currentBiggestNum = numbers[0];
    let result = [];
    result.push(currentBiggestNum);


    for (let i = 0; i < numbers.length; i++) {
        let nextNum = numbers[i + 1];

        if (nextNum >= currentBiggestNum) {
            currentBiggestNum = nextNum;
            result.push(currentBiggestNum);
        }
    }

    return result;


}




solve([20, 3, 2, 15, 6, 1])