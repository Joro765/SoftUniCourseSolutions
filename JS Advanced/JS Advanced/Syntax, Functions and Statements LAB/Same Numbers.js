function solve(num) {

    let numString = num.toString();

    let currentElement = numString[0];

    let isValid = true;
    let sum = 0;

    for (let element of numString) {
        sum += Number(element)
        if (element != currentElement) {
            isValid = false;
        }
    }

    if (isValid === true) {
        console.log("true");
        console.log(sum);
    } else {
        console.log("false");
        console.log(sum);
    }



}

solve(2222222)