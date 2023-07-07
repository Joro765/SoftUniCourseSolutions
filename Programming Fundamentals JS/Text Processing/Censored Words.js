function censoredWord(text, word) {

    while (text.includes(word)) {
        let count = word.length;
        let str = "*";
        text = text.replace(word, str.repeat(count));
    }


    console.log(text);


}


censoredWord('Find the hidden word', 'hidden')