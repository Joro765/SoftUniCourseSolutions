function solve(operations) {


    let numOne = 2;
    let numTwo = 3;

    let calculate = {
        sum: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => a / b,
        multiply: (a, b) => a * b,
    }


    for (const operation of operations) {
        let result = calculate[operation](numOne, numTwo);
        console.log(result);
    }

}


solve(["sum", "subtract", "sum", "divide", "multiply", "sum"])



// Моя библиотека с функции, които се извикват от масив с команди
