function modernTimes(text) {

    let textArray = text.split(" ");

    for (const word of textArray) {

        // Ако започва с хаштаг и е по-дълго от 1 символ
        if (word.startsWith("#") && word.length > 1) {
            let wordArray = word.split(""); // Превръщам стринга на масив
            wordArray.shift() // Махам хаштага за да не бърка проверката
            let isValid = true;

            // Проверявам за всеки символ от думата
            for (const char of wordArray) {
                // Ако някой символ е число - брейк и булл флаг
                if (!isNaN(char)) {
                    isValid = false;
                    break;
                }
            }

            // Ако думата е валидна направо я принтирам с джойн за да стане от масив на стринг
            if (isValid === true) {
                console.log(wordArray.join(""));
            }
        }

    }
}



modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')