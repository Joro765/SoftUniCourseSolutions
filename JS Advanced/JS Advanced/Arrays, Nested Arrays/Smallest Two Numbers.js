function solve(numbers) {

    let result = [];

    numbers.sort((a, b) => a - b);

    for (let i = 0; i < 2; i++) {
        result.push(numbers.shift());
    }

    console.log(result.join(" "));

}

solve([30, 15, 50, 5])