function goldMine(input) {
    let index = 0;

    let locations = Number(input[index++]);

    for (let loc = 0; loc < locations; loc++) {
        let expected = Number(input[index++]);
        let days = Number(input[index++]);
        let gold = 0;
        for (let day = 0; day < days; day++) {
            let currentGold = Number(input[index++]);
            gold += currentGold;
        }

        let avgGold = gold / days;

        if (avgGold >= expected) {
            console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expected - avgGold).toFixed(2)} gold.`);
        }
    }

}


goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])