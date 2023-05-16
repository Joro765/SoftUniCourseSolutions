function vacation(input) {
    let index = 0;

    let vacationPrice = Number(input[index]);
    index++;

    let startingMoney = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    isFinished = false;
    isReady = false;
    let spendCount = 0;
    let days = 0;


    while (true) {
        let money = Number(input[index]);
        index++;
        days++;
        if (command === "spend") {
            if (money >= startingMoney) {
                startingMoney = 0;
            } else {
                startingMoney -= money;
            }
            spendCount++;
        }


        if (command === "save") {
            startingMoney += money;
            spendCount = 0;
        }

        if (spendCount >= 5) {
            isFinished = true;
            break;
        }

        if (startingMoney >= vacationPrice) {
            isReady = true;
            break;
        }
        command = input[index];
        index++;
    }



    if (isFinished === true) {
        console.log("You can't save the money.");
        console.log(days);
    }

    if (isReady === true) {
        console.log(`You saved the money for ${days} days.`);
    }
}


vacation(["250",

    "150",

    "spend",

    "50",

    "spend",

    "50",

    "save",

    "100",

    "save",

    "100"])