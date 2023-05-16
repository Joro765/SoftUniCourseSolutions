function printOdd(num) {
    let sum = 0;
    let currentNum = 1;

    while (num > 0) {

        if (currentNum % 2 !== 0) {
            console.log(currentNum);
            sum += currentNum;
            num--;
        }

        currentNum++;

    }

    console.log(`Sum: ${sum}`);

}


printOdd(5);