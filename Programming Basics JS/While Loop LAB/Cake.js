function cake(input) {
    let index = 0;

    let w = Number(input[index]);
    index++;

    let l = Number(input[index]);
    index++;

    let cakeSize = w * l;

    let command = input[index];
    index++;

    while (command !== "STOP") {
        let piece = Number(command);

        cakeSize -= piece;

        if (cakeSize < 0) {
            break;
        }

        command = input[index];
        index++;

    }

    if (cakeSize <= 0) {
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
    } else {
        console.log(`${cakeSize} pieces are left.`);
    }

}

cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"])