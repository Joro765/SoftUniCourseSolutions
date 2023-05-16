function oscars(input) {
    let actor = input[0];
    let startingPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let isFinished = false;

    let finalPoints = startingPoints;

    for (let i = 3; i < input.length; i += 2) {
        let judge = input[i];
        let points = Number(input[i + 1]);
        let currentPoints = 0;

        currentPoints = (judge.length * points) / 2;
        finalPoints += currentPoints;

        if (finalPoints > 1250.5) {
            isFinished = true;
            break;
        }
    }

    if (isFinished === true) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${finalPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${Math.abs((finalPoints - 1250.5)).toFixed(1)} more!`);
    }

}


oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])