function solve(text) {

    // Regex
    let pattern = /(?<firstName>\b[A-Z]{1}[a-z]+) (?<lastName>[A-Z]{1}[a-z]+\b)/gm;

    // Array to store matches from Regex EXEC
    let names = [];

    // EXEC Regex
    let match = pattern.exec(text);

    // While there is a match
    while (match) {
        //Push match into array
        names.push(match[0]);
        // EXEC Regex
        match = pattern.exec(text);
    }

    // Log all matches from array joined on Space
    console.log(names.join(" "));



}


solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")