function maxNumber(input) {
    let index = 0;
    let command = input[index];
    let maxNum = Number(input[0]);


    while (command !== "Stop") {
        let currentNum = Number(command);

        if (currentNum > maxNum) {
            maxNum = currentNum;
        }

        command = input[index];
        index++;
    }


    console.log(maxNum);

}


maxNumber(["100",

    "99",

    "80",

    "70",

    "Stop"])