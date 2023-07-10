function stringSubstring(word, text) {


    textArray = text.split(" ");

    let isValid = false;

    for (let element of textArray) {
        if (element.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            isValid = true;
            break;
        }

    }

    if (!isValid) {
        console.log(`${word} not found!`);
    }

}


stringSubstring('javascript', 'JavaScript is the best programming language')


