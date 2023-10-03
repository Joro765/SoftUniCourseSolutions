function argumentInfo(...args) {

    let objCounter = {};

    for (const arg of args) {
        let type = typeof arg;
        let value = arg;
        console.log(type + ": " + value);
        if (!objCounter.hasOwnProperty(type)) {
            objCounter[type] = 1;
        } else {
            objCounter[type] += 1;
        }
    }

    let sortedObjCounter = Object.entries(objCounter).sort((a, b) => b[1] - a[1]);

    for (const el of sortedObjCounter) {
        console.log(`${el[0]} = ${el[1]}`);
    }



}



argumentInfo('cat', 42, 44, function () { console.log('Hello world!'); })