function activationKeys(data) {

    // Our Key
    let key = data.shift();

    // Taking first line of input - command
    let command = data.shift();


    while (command !== "Generate") {
        let tokens = command.split(">>>");
        let startIndex;
        let endIndex;

        let task = tokens[0];

        switch (task) {
            case "Slice":
                // Режем всичко межу starIndex и endIndex
                startIndex = Number(tokens[1]);
                endIndex = Number(tokens[2]);

                key = key.substring(0, startIndex) + key.substring(endIndex);
                console.log(key);
                break;

            case "Flip":
                let type = tokens[1];
                startIndex = Number(tokens[2]);
                endIndex = Number(tokens[3]);

                // Сменяме парче от целия стринг на UpperCase или LowerCase
                if (type === "Upper") {
                    key = key.substring(0, startIndex) + (key.substring(startIndex, endIndex)).toUpperCase() + key.substring(endIndex);
                } else {
                    key = key.substring(0, startIndex) + (key.substring(startIndex, endIndex)).toLowerCase() + key.substring(endIndex);
                }
                console.log(key);
                break;


            case "Contains":
                let substring = tokens[1];

                // Проверяваме дали дадена частица се съдържа в текста
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
        }

        // Взимаме нов ред от инпута за While цикъла
        command = data.shift();
    }

    console.log(`Your activation key is: ${key}`);

}


activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]))