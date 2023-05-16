function demo(number) {

    let result = 0;

    if (number % 10 === 0) {
        result = 10;
    } else if (number % 7 === 0) {
        result = 7;
    } else if (number % 6 === 0) {
        result = 6;
    } else if (number % 3 === 0) {
        result = 3;
    } else if (number % 2 === 0) {
        result = 2;
    } else {
        console.log("Not divisible");
    }

    if (result != 0) {
        console.log(`The number is divisible by ${result}`);
    }


}

demo(30);