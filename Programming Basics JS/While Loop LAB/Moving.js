function movingBoxes(input) {
    let index = 0;
    let possibleWidth = Number(input[index]);
    index++;

    let possibleLength = Number(input[index]);
    index++;

    let possibleHeight = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let availableSpace = possibleWidth * possibleLength * possibleHeight;

    while (command !== "Done") {
        let box = Number(command);

        availableSpace -= box;

        if (availableSpace < 0) {
            break;
        }

        command = input[index];
        index++;
    }

    if (availableSpace >= 0) {
        console.log(`${availableSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(availableSpace)} Cubic meters more.`);
    }

}


movingBoxes(["10",

    "10",

    "2", "20", "20", "20", "20", "122"])