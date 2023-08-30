function solve(x1, y1, x2, y2) {

    function calculate(a, b, c, d) {
        let validator = 'invalid';
        let result = Math.sqrt((c - a) ** 2 + (d - b) ** 2);
        if (Number.isInteger(result)) {
            validator = 'valid';
        } else {
            validator = 'invalid';
        }

        console.log(`{${a}, ${b}} to {${c}, ${d}} is ${validator}`);
    }


    calculate(x1, y1, 0, 0);
    calculate(x2, y2, 0, 0);
    calculate(x1, y1, x2, y2);


}


solve(2, 1, 1, 1)
