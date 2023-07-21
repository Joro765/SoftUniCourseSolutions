function imitationGame(data) {

    // Взимаме си думата
    let word = data.shift();

    // Взимаме си ред от инпута
    let currentLine = data.shift();

    while (currentLine !== "Decode") {
        // Взимаме си информацията от командата
        let tokens = currentLine.split("|");
        let task = tokens[0];


        switch (task) {
            case "Move":
                let n = Number(tokens[1]);

                // Cut front of the string
                let newPart = word.substring(0, n);

                // Cut the back of the string
                let oldPart = word.substring(n, word.length);

                // Combine two parts of the string
                word = oldPart + newPart;
                break;



            case "Insert":
                let index = Number(tokens[1]);
                let element = tokens[2];

                // Конвертирам стринга на масив за да го обработя
                let wordArr = word.split("");

                // Обработвам масива
                wordArr.splice(index, 0, element);

                // Връщам от масив на стринг
                word = wordArr.join("");
                break;



            case "ChangeAll":
                let oldEl = tokens[1];
                let newEl = tokens[2];

                // Докато се съдържа подменям елемента с новия
                while (word.includes(oldEl)) {
                    word = word.replace(oldEl, newEl);
                }

                break;

        }


        // Взимаме следващ ред от импута
        currentLine = data.shift();
    }


    console.log(`The decrypted message is: ${word}`);



}


imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])