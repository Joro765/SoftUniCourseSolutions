function triplesLatinLetters(n) {
    let letterA;
    let letterB;
    let letterC;

    for (let a = 0; a < n; a++) {
        letterA = String.fromCharCode(97 + a);
        for (let b = 0; b < n; b++) {
            letterB = String.fromCharCode(97 + b);
            for (let c = 0; c < n; c++) {
                letterC = String.fromCharCode(97 + c);
                console.log(`${letterA}${letterB}${letterC}`);
            }
        }
    }

}

triplesLatinLetters("3")