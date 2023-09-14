function solve(a, b) {

    let currentHighest;

    for (let i = 1; i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            currentHighest = i;
        }
    }

    console.log(currentHighest);

}


solve(2154, 458)