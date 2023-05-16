function guessPassword(input) {
    let guess = input[0];
    let correctPassword = "s3cr3t!P@ssw0rd";
    if (guess === correctPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}


guessPassword(["qwerty"]);