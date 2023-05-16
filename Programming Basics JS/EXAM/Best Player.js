function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;

    let bestPlayer = "";
    let mostGoals = 0;
    let didHattrick = false;


    while (command !== "END") {
        let playerName = command;
        let goals = Number(input[index]);
        index++

        if (goals > mostGoals) {
            bestPlayer = playerName;
            mostGoals = goals;
        }

        if (goals >= 3) {
            didHattrick = true;
        }

        if (goals >= 10) {
            break;
        }

        command = input[index];
        index++
    }



    console.log(`${bestPlayer} is the best player!`);

    if (didHattrick === true) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else if (didHattrick === false) {
        console.log(`He has scored ${mostGoals} goals.`);
    }
}

bestPlayer(["Petrov",
    "2",
    "Drogba",
    "11"]);