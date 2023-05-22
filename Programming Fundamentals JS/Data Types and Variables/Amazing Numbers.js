function amazingNumbers(num) {

    let numToString = num.toString();
    let sum = 0;


    for (let i = 0; i < numToString.length; i++) {
        let stringToNum = Number(numToString[i]);
        sum += stringToNum;
    }

    if (sum.toString().includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(1233)