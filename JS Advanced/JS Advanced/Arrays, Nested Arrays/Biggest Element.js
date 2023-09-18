function solve(matrix) {

    let highestNumber = Number.MIN_SAFE_INTEGER;

    matrix.forEach(row => {
        row.forEach(number => {
            if (number >= highestNumber) {
                highestNumber = number;
            }
        })
    });

    return highestNumber;
}


solve([[20, 50, 10, 300],

[8, 33, 145, 150]])