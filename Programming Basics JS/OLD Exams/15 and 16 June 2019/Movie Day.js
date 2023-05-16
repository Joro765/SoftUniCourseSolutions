function movieDay(input) {
    let availableTime = Number(input[0]);
    let sceneCount = Number(input[1]);
    let timePerScene = Number(input[2]);

    let cleaning = availableTime * 0.15;

    let timeNeeded = (sceneCount * timePerScene) + cleaning;

    if (availableTime >= timeNeeded) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(availableTime - timeNeeded)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${(timeNeeded - availableTime)} minutes.`);
    }

}


movieDay(["120",
    "10",
    "11"])