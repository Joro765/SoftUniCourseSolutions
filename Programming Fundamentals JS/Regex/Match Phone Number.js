function solve(text) {

    // Regex
    let pattern = /\s{0,1}\+[359]+([\s|-])[2]\1[0-9]{3}\1[0-9]{4}\b/gm;


    // Array to store matches from Regex EXEC
    let numbers = [];


    // EXEC Regex
    let match = pattern.exec(text);


    // While there is a match
    while (match) {
        //Push match into array
        numbers.push(match[0].trim());
        // EXEC Regex
        match = pattern.exec(text);
    }


    // Log all matches from array joined on Space
    console.log(numbers.join(", "));




}


solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])


