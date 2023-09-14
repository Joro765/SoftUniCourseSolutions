let calculate = function (a, b) {
    return a + b;
}

function printResult(x) {
    console.log(`Result: ${x}`);
}


// Arrow function
let greet = () => console.log("Greetings!");

greet()



printResult(calculate(2, 5));