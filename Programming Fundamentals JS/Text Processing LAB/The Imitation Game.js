function imitationGame(data) {

    // Текстът, който ще модифицираме
    let text = data.shift();

    // Взимане на команда
    let index = 0;
    let command = data[index];


    while (command !== "Decode") {
        let task = command.split("|"); //  Цялата команда с параметрите

        switch (task[0]) {
            case "Move":
                let count = Number(task[1]);
                let elements = text.slice(0, count); // Взимам елементите отпред
                let newText = text.slice(count) // Взимам останалите елементи
                text = newText.concat(elements); // Разменям им местата
                break;


            case "Insert":
                let i = Number(task[1]); // Взимаме индекса
                let element = task[2]; // Взимаме елемента

                // Превръщам в масив за да работя с индекс и после връщам на стринг
                let textArr = text.split("");
                textArr.splice(i, 0, element);
                text = textArr.join("");
                break;


            case "ChangeAll":
                let oldChar = task[1];
                let newChar = task[2];

                // Докато се съдържа заменям
                while (text.includes(oldChar)) {
                    text = text.replace(oldChar, newChar);
                }

                break;
        }


        // Ъпдейтване на командата
        index++;
        command = data[index];
    }




    console.log(`The decrypted message is: ${text}`);


}


imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])