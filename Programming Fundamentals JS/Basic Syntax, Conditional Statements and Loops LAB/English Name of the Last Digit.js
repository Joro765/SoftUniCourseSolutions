function returnNumber(number) {
    // let numConvert = String(number);
    // let lastDigit = numConvert[numConvert.length - 1];
    // let result;

    // switch (lastDigit) {
    //     case "0": result = "zero"; break;
    //     case "1": result = "one"; break;
    //     case "2": result = "two"; break;
    //     case "3": result = "three"; break;
    //     case "4": result = "four"; break;
    //     case "5": result = "five"; break;
    //     case "6": result = "six"; break;
    //     case "7": result = "seven"; break;
    //     case "8": result = "eight"; break;
    //     case "9": result = "nine"; break;
    // }

    // console.log(result);



    // Друго решение с Масив

    let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let numConvert = String(number);

    let lastDigit = numConvert[numConvert.length - 1];

    console.log(numbers[lastDigit - 1]);
}

returnNumber(512)