function sum(a, b, c) {
    result = 0;


    // Add first two numbers to variable sum
    function add(x, y) {
        return x + y;
    }

    // Substract third number from the sum of the first two numbers
    function substract(value1, value2) {
        value1 -= value2;
        return value1;
    }

    // Invoking functions
    result = add(a, b);  // Save result from first function into result
    result = substract(result, c); // Save result from the second function

    return result;
}

console.log(sum(23, 6, 10));