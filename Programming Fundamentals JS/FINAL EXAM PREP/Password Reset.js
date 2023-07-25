function passwordReset(data) {

    // Take Password - first line of input
    let password = data.shift();

    // Take first line of input as command 
    let command = data.shift();


    while (command !== "Done") {
        let tokens = command.split(" ");
        let task = tokens[0];

        switch (task) {
            case "TakeOdd":
                let currentPassword = "";
                for (let i = 1; i < password.length; i += 2) {
                    currentPassword += password[i];
                }
                password = currentPassword;
                console.log(password);
                break;

            case "Cut":
                let index = Number(tokens[1]);
                let length = Number(tokens[2]);

                // text to be removed from password
                let text = password.substring(index, index + length);

                // Replace found text with empty string (nothing)
                if (password.includes(text)) {
                    password = password.replace(text, "");
                }
                console.log(password);
                break;


            case "Substitute":
                let textToReplace = tokens[1];
                let replacementText = tokens[2];

                // Replace text
                if (!password.includes(textToReplace)) {
                    console.log(`Nothing to replace!`);
                } else {
                    while (password.includes(textToReplace)) {
                        password = password.replace(textToReplace, replacementText);
                    }
                    console.log(password);
                }
                break;

        }

        // Take new line of input for the while loop
        command = data.shift();
    }


    console.log(`Your password is: ${password}`);

}


passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]))