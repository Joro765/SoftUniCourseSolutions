function revealWords(words, sentence) {

    // Взимаме си думите за проверка
    let wordsArray = words.split(", ");

    // Минаваме по всяка една дума
    for (const word of wordsArray) {

        // Взимаме шаблон за думата
        let wordOfStars = "*".repeat(word.length);

        // Заместваме шаблона с думата
        sentence = sentence.replace(wordOfStars, word);
    }

    console.log(sentence);




}


revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')