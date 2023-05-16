function operations(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+":
            result = a + b;
            if (result % 2 === 0) {
                console.log(`${a} ${operator} ${b} = ${result} - even`)
            } else {
                console.log(`${a} ${operator} ${b} = ${result} - odd`)
            }
            break;
        case "-":
            result = a - b;
            if (result % 2 === 0) {
                console.log(`${a} ${operator} ${b} = ${result} - even`)
            } else {
                console.log(`${a} ${operator} ${b} = ${result} - odd`)
            }
            break;
        case "*":
            result = a * b;
            if (result % 2 === 0) {
                console.log(`${a} ${operator} ${b} = ${result} - even`)
            } else {
                console.log(`${a} ${operator} ${b} = ${result} - odd`)
            }
            break;
        case "/":
            result = a / b;
            if (a === 0 || b === 0) {
                if (a > b) {
                    console.log(`Cannot divide ${a} by zero`);
                } else {
                    console.log(`Cannot divide ${b} by zero`);
                }
            } else {
                console.log(`${a} / ${b} = ${result.toFixed(2)}`);
            }
            break;

        case "%":
            result = a % b;
            if (a === 0 || b === 0) {
                if (a > b) {
                    console.log(`Cannot divide ${a} by zero`);
                } else {
                    console.log(`Cannot divide ${b} by zero`);
                }
            } else {
                console.log(`${a} % ${b} = ${result}`);
            }
            break;
    }
}
operations(["25", "8", "*"]);