function histogram(input) {
    let numsCount = Number(input[0]);
    let currentNum = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for (i = 1; i <= numsCount; i++) {
        currentNum = input[i];
        if (currentNum < 200) {
            p1 += 1;
        }
        if (currentNum >= 200 && currentNum <= 399) {
            p2 += 1;
        }
        if (currentNum >= 400 && currentNum <= 599) {
            p3 += 1;
        }
        if (currentNum >= 600 && currentNum <= 799) {
            p4 += 1;
        }
        if (currentNum >= 800) {
            p5 += 1;
        }

    }


    console.log(`${((p1 / numsCount) * 100).toFixed(2)}%`);
    console.log(`${((p2 / numsCount) * 100).toFixed(2)}%`);
    console.log(`${((p3 / numsCount) * 100).toFixed(2)}%`);
    console.log(`${((p4 / numsCount) * 100).toFixed(2)}%`);
    console.log(`${((p5 / numsCount) * 100).toFixed(2)}%`);

}


histogram(["3", "1", "2", "999"]);