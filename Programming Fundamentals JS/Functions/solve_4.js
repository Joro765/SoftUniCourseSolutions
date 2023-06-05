function myPow(num, power) {

    let result = 1;

    for (let i = 0; i < power; i++) {
        result = multiplyNumbers(result, num); // Saving value from another function
    }

    console.log(result);


    // Function to multiply
    function multiplyNumbers(x, y) {
        return x * y;
    }


}

myPow(2, 8)