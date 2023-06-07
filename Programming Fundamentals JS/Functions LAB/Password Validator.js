function passwordValidator(password) {

    let isValid = true;

    checkLength(password);
    checkSymbols(password);
    checkDigits(password);

    if (isValid) {
        console.log("Password is valid");
    }

    // Function to check Symbols
    function checkSymbols(pass) {
        let isOnlyLettersAndDigits = true;
        for (let index = 0; index < pass.length; index++) {
            let currentCode = pass.charCodeAt(index);
            let isNotNumber = currentCode < 48 || currentCode > 57;
            let isNotSmallLetter = currentCode < 97 || currentCode > 122;
            let isNotBigLetter = currentCode < 65 || currentCode > 90;

            if (isNotNumber && isNotSmallLetter && isNotBigLetter) {
                isOnlyLettersAndDigits = false;
            }
        }

        if (isOnlyLettersAndDigits === false) {
            isValid = false;
            console.log("Password must consist only of letters and digits");
        } else {
            return;
        }
    }

    // Function to check Digits count
    function checkDigits(pass) {
        let digitsCounter = 0;

        for (let index = 0; index < pass.length; index++) {
            let currentChar = pass.charCodeAt(index);
            let isNumber = currentChar >= 48 && currentChar <= 57;

            if (isNumber) {
                digitsCounter++;
            }
        }

        if (digitsCounter >= 2) {
            return;
        } else {
            isValid = false;
            console.log("Password must have at least 2 digits");
        }
    }

    // Function to check length of password
    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return;
        } else {
            isValid = false;
            console.log("Password must be between 6 and 10 characters");
        }
    }

}

passwordValidator('MyPass123')


// if (checkLength(password) === true && checkSymbols(password) === true && checkDigits(password) === true) {
//     console.log("Password is valid");
// }