function minNumber(input) {
    let index = 0;
    let command = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let currentNum = Number(command);

        if (currentNum < minNumber) {
            minNumber = currentNum
        }
        index++;
        command = input[index];
    }

    console.log(minNumber);
}

minNumber(["100",

    "99",

    "80",

    "70",

    "Stop"])