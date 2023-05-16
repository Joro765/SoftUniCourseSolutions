function oscars(input) {
    let actor = input[0];
    let startingPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let judgeName = ""
    let judgePoints = 0;

    for (let i = 3; i < input.length; i++) {
        if (i % 2 != 0) {
            judgeName = input[i];
        }
        if (i % 2 == 0) {
            judgePoints = Number(input[i])
            startingPoints += (Number(judgeName.length) * judgePoints) / 2;
            if (startingPoints > 1250.5) {
                console.log(`Congratulations, ${actor} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
                break;
            }
        }

    }

    if (startingPoints <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }

}


oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])