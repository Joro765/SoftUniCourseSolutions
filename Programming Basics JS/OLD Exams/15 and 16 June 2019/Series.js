function series(input) {
    let budget = Number(input[0]);
    let seriesCount = Number(input[1])
    let isFinished = false;

    for (let i = 2; i <= input.length - 1; i += 2) {
        let series = input[i];
        let price = Number(input[i + 1]);
        let currentPrice = 0;

        if (series === "Thrones") {
            currentPrice = price * 0.5;
        } else if (series === "Lucifer") {
            currentPrice = price * 0.6;
        } else if (series === "Protector") {
            currentPrice = price * 0.7;
        } else if (series === "TotalDrama") {
            currentPrice = price * 0.8;
        } else if (series === "Area") {
            currentPrice = price * 0.9;
        } else {
            currentPrice = price
        }

        budget -= currentPrice;

        if (budget < 0) {
            isFinished = true;
        }
    }

    if (isFinished === true) {
        let fixedBudget = budget.toFixed(2);
        console.log(`You need ${Math.abs(fixedBudget).toFixed(2)} lv. more to buy the series!`);
    } else {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    }
}

series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])




// Thrones – 50%
//  Lucifer – 40%
//  Protector – 30%
//  TotalDrama – 20%
//  Area – 10%