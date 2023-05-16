function travel(input) {
    let index = 0;
    let command = input[index];
    index++;
    let savings = 0;
    let isGoing = false;


    while (command !== "End") {
        isGoing = false;
        let destination = command;
        let price = Number(input[index]);
        index++;

        while (price > savings) {
            savings += Number(input[index]);
            if (savings >= price) {
                isGoing = true;
                console.log(`Going to ${destination}!`);
                savings = 0;
            }

            if (isGoing) {
                index++;
                command = input[index];
                index++
                break;
            }

            index++;

        }


    }
}


travel(["Greece",

    "1000",

    "200",

    "200",

    "300",

    "100",

    "150",

    "240",

    "Spain",

    "1200",

    "300",

    "500",

    "193",

    "423",

    "End"])