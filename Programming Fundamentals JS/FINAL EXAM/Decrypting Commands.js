function decryptingCommands(data) {

    let text = data.shift();

    let command = data.shift();

    while (command !== "Finish") {
        let tokens = command.split(" ");
        let task = tokens[0];

        let currentChar;
        let newChar;
        let startIndex;
        let endIndex;

        switch (task) {

            case "Replace":
                currentChar = tokens[1];
                newChar = tokens[2];

                while (text.includes(currentChar)) {
                    text = text.replace(currentChar, newChar);
                }
                console.log(text);
                break;


            case "Make":
                let type = tokens[1];

                if (type === "Upper") {
                    text = text.toUpperCase();
                } else {
                    text = text.toLowerCase();
                }

                console.log(text);
                break;



            case "Check":
                let str = tokens[1];

                if (text.includes(str)) {
                    console.log(`Message contains ${str}`);
                } else {
                    console.log(`Message doesn't contain ${str}`);
                }
                break;


            case "Sum":
                startIndex = Number(tokens[1]);
                endIndex = Number(tokens[2]);
                let substr;
                let asciiValue = 0;

                if ((startIndex >= 0 && startIndex < text.length) && (endIndex >= 0 && endIndex < text.length)) {
                    substr = text.substring(startIndex, endIndex + 1);
                    for (let i = 0; i < substr.length; i++) {
                        asciiValue += Number(substr.charCodeAt(i));
                    }
                    console.log(asciiValue);

                } else {
                    console.log(`Invalid indices!`);
                }

                break;



            case "Cut":
                startIndex = Number(tokens[1]);
                endIndex = Number(tokens[2]);

                if ((startIndex >= 0 && startIndex < text.length) && (endIndex >= 0 && endIndex < text.length)) {
                    text = text.substring(0, startIndex) + text.substring(endIndex + 1);
                    console.log(text);
                } else {
                    console.log(`Invalid indices!`);
                }


                break;
        }


        command = data.shift();
    }


}



decryptingCommands(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"])
