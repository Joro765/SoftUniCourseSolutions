function printSum(a, b) {
    let sum = 0;
    let buff = ``;

    for (let i = a; i <= b; i++) {
        sum += i;
        buff += `${i} `
    }

    console.log(buff);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10)