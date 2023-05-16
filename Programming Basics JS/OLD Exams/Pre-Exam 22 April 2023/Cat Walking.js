function catWalk(input) {
    let minsPerDay = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let totalMinsWalking = minsPerDay * walksPerDay;

    let caloriesBurned = totalMinsWalking * 5;

    if (caloriesBurned >= (caloriesPerDay * 0.5)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }

}


catWalk(["30",
    "3",
    "600"])