function movieStars(input) {
    index = 0;
    let budget = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    isBudgetAvailable = true;

    while (command !== "ACTION") {
        let actor = command;
        let actorPay = 0;

        if (actor.length > 15) {
            actorPay = budget * 0.2;
        } else {
            actorPay = Number(input[index]);
            index++;
        }

        budget -= actorPay;

        if (budget < 0) {
            isBudgetAvailable = false;
            break;
        }

        command = input[index];
        index++;
    }

    if (isBudgetAvailable === false) {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    } else {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }


}

movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"])