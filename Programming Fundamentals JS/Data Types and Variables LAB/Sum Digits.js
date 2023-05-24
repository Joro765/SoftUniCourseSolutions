function sumDigits(num) {

    let sum = 0;

    let numToText = num.toString();

    for (let i = 0; i < numToText.length; i++) {
        sum += Number(numToText[i]);
    }

    console.log(sum);
}

sumDigits(543)