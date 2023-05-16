function sumPosition(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";    // АКО ТРЯБВА РЕЗУЛТАТЪТ ДА Е НА ЕДИН РЕД МНОЖЕСТВО ОТ ЧИСЛА

    for (let current = start; current <= end; current++) {
        let currentNum = "" + current;
        let even = 0;
        let odd = 0;
        for (let i = 0; i <= currentNum.length - 1; i++) {
            let currentDigit = Number(currentNum[i]);

            if (i % 2 === 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }

        }

        if (even === odd) {
            printLine += ` ${current}`;  // АКО ТРЯБВА РЕЗУЛТАТЪТ ДА Е НА ЕДИН РЕД МНОЖЕСТВО ОТ ЧИСЛА
        }
    }

    console.log(printLine);  // АКО ТРЯБВА РЕЗУЛТАТЪТ ДА Е НА ЕДИН РЕД МНОЖЕСТВО ОТ ЧИСЛА
}

sumPosition(["100000",

    "100050"])