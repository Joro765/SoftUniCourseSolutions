function magicSum(arr, magicNum) {


    for (let x = 0; x < arr.length; x++) {
        let firstNum = arr[x];
        for (let y = x + 1; y < arr.length; y++) {
            let secondNum = arr[y];

            if ((firstNum + secondNum) === magicNum) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6],
    6)