function messageTranslator(data) {

    let pattern = /[!]{1}(?<command>[A-Z]{1}[a-z]{2,})[!]{1}[:]{1}[[]{1}(?<word>[A-Za-z]+)[\]]{1}/;

    let lines = Number(data.shift());

    for (const message of data) {
        let match = pattern.exec(message);




        if (match) {
            let command = match.groups.command;
            let word = match.groups.word;

            let resultArr = [];

            for (let i = 0; i < word.length; i++) {
                let value = Number(word.charCodeAt(i));
                resultArr.push(value);
            }


            console.log(`${command}: ${resultArr.join(" ")}`);

        } else {
            console.log(`The message is invalid`);
        }

        match = pattern.exec(message);
    }



}


messageTranslator((["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"]))