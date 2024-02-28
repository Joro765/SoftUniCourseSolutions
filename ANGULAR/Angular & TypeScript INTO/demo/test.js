function giveMoney(name, age) {

    let isValid = false;

    function checkValidity(x) {
        if (x >= 18 && age <= 25) {
            isValid = true;
        }
    }

    function printResult(isValid, y) {
        if (isValid === true) {
            return `${y} is eligible to receive the money`;
        } else {
            return `${y} is not eligible to receive the money`;
        }
    }

    if (!name || !age) {
        return `Enter correct information!`
    } else {
        checkValidity(age);
        return printResult(isValid, name);
    }



}

console.log(giveMoney("Joro", 27));