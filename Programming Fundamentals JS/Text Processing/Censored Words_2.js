function censoredWord(text, word) {

    // Режем стринга чрез думата и го правим на масив
    let result = text.split(word);

    // Джойнваме елементите на масива там където сме премахнали думата 
    result = result.join("*".repeat(word.length))

    console.log(result);


}


censoredWord('Find the hidden word', 'hidden')