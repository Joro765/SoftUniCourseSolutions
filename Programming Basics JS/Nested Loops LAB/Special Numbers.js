function specialNumbers(input) {
    let n = Number(input[0]);
    let start = 1111;
    let end = 9999;
    let result = "";
    // let isValid = true;

    for (let i = start; i <= end; i++) {
        let currentNumber = i + "";
        let isValid = true;
        for (let x = 0; x <= currentNumber.length - 1; x++) {
            let currentChar = Number(currentNumber[x]);
            if ((n % currentChar) !== 0) {
                isValid = false;
                break;
            }
        }

        if (isValid === true) {
            result += `${currentNumber} `;
        }
    }

    console.log(result);

}

specialNumbers(["3"])