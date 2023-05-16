function bestPlayer(input) {
    let index = 0;

    let command = input[index];
    index++;

    let mostGoals = 0;
    let bestPlayer = "";
    let hattrick = false;

    while (command !== "END") {
        let player = command;
        let goals = Number(input[index]);
        index++

        if (goals > mostGoals) {
            bestPlayer = player;
            mostGoals = goals;
        }

        if (goals >= 3) {
            hattrick = true;
        }

        if (goals >= 10) {
            break;
        }

        command = input[index];
        index++
    }

    console.log(`${bestPlayer} is the best player!`);
    if (hattrick === true) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else if (hattrick === false) {
        console.log(`He has scored ${mostGoals} goals.`);
    }


}

bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"])