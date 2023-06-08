function factorialDivision(firstNum, secondNum) {

    // Function to calculate factorial
    function factorial(number) {
        let result = 1;
        if (number === 0) {
            return 1;
        } else {
            for (let i = 1; i < number; i++) {
                result = result * (i + 1);
            }
        }
        return result;
    }

    // Invoke function and assign result to variables
    let firstFactorial = factorial(firstNum);
    let secondFactorial = factorial(secondNum);

    // Result of division
    let divisionResult = firstFactorial / secondFactorial;

    return console.log(divisionResult.toFixed(2));
}


factorialDivision(5, 2)