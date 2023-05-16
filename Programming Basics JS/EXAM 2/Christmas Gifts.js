function christmasGifts(input) {
    let index = 0;

    let command = input[index];
    index++;

    let adults = 0;
    let children = 0;

    while (command !== "Christmas") {
        let age = Number(command);

        if (age <= 16) {
            children++;
        } else {
            adults++;
        }

        command = input[index];
        index++;
    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${children}`);
    console.log(`Money for toys: ${children * 5}`);
    console.log(`Money for sweaters: ${adults * 15}`);

}



christmasGifts(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"])