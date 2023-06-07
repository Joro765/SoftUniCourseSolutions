function charactersRange(firstChar, secondChar) {

    // Function to find smaller character
    function isFirst(firstChar, secondChar) {
        return Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    }
    // Function to find larger character
    function isLast(firstChar, secondChar) {
        return Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    }

    // Saving the result of the functions into parameters
    let first = isFirst(firstChar, secondChar);
    let second = isLast(firstChar, secondChar);


    let charArr = [];

    for (let i = first; i <= second; i++) {
        if (i !== first && i !== second) {
            let current = String.fromCharCode(i);
            charArr.push(current);
        }
    }

    return charArr.join(" ");


}


console.log(charactersRange('a', 'd'))