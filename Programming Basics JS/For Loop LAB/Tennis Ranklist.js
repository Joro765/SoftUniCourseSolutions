function tennis(input) {
    let tournamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let finalPoints = 0;
    let tournamentsWon = 0;
    let averagePoints = 0;
    let tournamentsWonProcent = 0;
    let pointsWon = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] == "W") {
            pointsWon += 2000
            tournamentsWon += 1
        } else if (input[i] == "F") {
            pointsWon += 1200
        } else if (input[i] == "SF") {
            pointsWon += 720
        }
    }


    finalPoints = startingPoints + pointsWon;
    averagePoints = pointsWon / tournamentCount;
    tournamentsWonProcent = (tournamentsWon / tournamentCount) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${tournamentsWonProcent.toFixed(2)}%`);

}

tennis(["5", "1400", "F", "SF", "W", "W", "SF"]);