function uniquePinCodes(input) {
    let maxFirstNum = Number(input[0]);
    let maxSecondNum = Number(input[1]);
    let maxThirdNum = Number(input[2]);

    let pinCode = "";


    for (let a = 2; a <= maxFirstNum; a++) {
        let currentPin = "";
        if (a % 2 === 0) {
            currentPin += a + " ";
        } else {
            continue;
        }
        for (let b = 2; b <= maxSecondNum; b++) {
            if (b === 2 || b === 3 || b === 5 || b === 7) {
                currentPin += b + " ";
            } else {
                continue;
            }
            for (let c = 2; c <= maxThirdNum; c++) {
                if (c % 2 === 0) {
                    currentPin += c;
                    pinCode += `${currentPin}`;
                    // console.log(a + " " + b + " " + c);
                } else {
                    continue;
                }
                console.log(a + " " + b + " " + c);
            }
        }
    }


}

uniquePinCodes(["3",
    "5",
    "5"])