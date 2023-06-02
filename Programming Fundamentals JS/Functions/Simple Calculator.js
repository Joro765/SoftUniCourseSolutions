function simpleCalculator(numA, numB, operator) {

    let result = 0;

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }



    switch (operator) {
        case "multiply": result = multiply(numA, numB); break;
        case "divide": result = divide(numA, numB); break;
        case "add": result = add(numA, numB); break;
        case "subtract": result = subtract(numA, numB); break;
    }

    return result;
}



console.log(simpleCalculator(5, 15, "add"));