function timeForMovie(input) {
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let lunchBreakLenght = Number(input[2]);

    let lunchTime = lunchBreakLenght * (1 / 8);
    let chillTime = lunchBreakLenght * (1 / 4);

    let remainingTime = lunchBreakLenght - (lunchTime + chillTime);

    if (remainingTime >= episodeLength) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(remainingTime - episodeLength)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLength - remainingTime)} more minutes.`)
    }
}

timeForMovie(["Game of Thrones", "60", "96"]);