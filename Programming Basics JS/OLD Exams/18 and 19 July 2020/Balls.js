function balls(input) {
    let ballsCount = Number(input[0]);

    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherBalls = 0;
    let blackBalls = 0;


    for (i = 1; i < input.length; i++) {
        let color = input[i];

        if (color === "red") {
            totalPoints += 5;
            redBalls++;
        } else if (color === "orange") {
            totalPoints += 10;
            orangeBalls++;
        } else if (color === "yellow") {
            totalPoints += 15;
            yellowBalls++;
        } else if (color === "white") {
            totalPoints += 20;
            whiteBalls++;
        } else if (color === "black") {
            totalPoints = Math.floor(totalPoints / 2)
            blackBalls++;
        } else {
            otherBalls++;
            continue;
        }
    }


    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);

}


balls(["3",
    "white",
    "black",
    "pink"])