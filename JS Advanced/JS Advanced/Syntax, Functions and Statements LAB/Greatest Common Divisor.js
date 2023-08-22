function solve(a, b) {

    let currentHighest;

    for (let i = 1; i <= 5; i++) {
        if (a % i === 0 && b % i === 0) {
            currentHighest = i;
        }
    }

    console.log(currentHighest);

}


solve(2154, 458)