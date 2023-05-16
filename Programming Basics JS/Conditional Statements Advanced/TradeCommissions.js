function tradeCommissions(input) {
    let city = input[0];
    let moneyGenerated = Number(input[1]);
    let commission = 0;

    if (moneyGenerated >= 0 && moneyGenerated <= 500) {
        switch (city) {
            case "Sofia": commission = moneyGenerated * 0.05; break;
            case "Varna": commission = moneyGenerated * 0.045; break;
            case "Plovdiv": commission = moneyGenerated * 0.055; break;
            default: console.log("error");
                break;
        }
    } else if (moneyGenerated > 500 && moneyGenerated <= 1000) {
        switch (city) {
            case "Sofia": commission = moneyGenerated * 0.07; break;
            case "Varna": commission = moneyGenerated * 0.075; break;
            case "Plovdiv": commission = moneyGenerated * 0.08; break;
            default: console.log("error");
                break;
        }

    } else if (moneyGenerated > 1000 && moneyGenerated <= 10000) {
        switch (city) {
            case "Sofia": commission = moneyGenerated * 0.08; break;
            case "Varna": commission = moneyGenerated * 0.1; break;
            case "Plovdiv": commission = moneyGenerated * 0.12; break;
            default: console.log("error");
                break;
        }
    } else if (moneyGenerated > 10000) {
        switch (city) {
            case "Sofia": commission = moneyGenerated * 0.12; break;
            case "Varna": commission = moneyGenerated * 0.13; break;
            case "Plovdiv": commission = moneyGenerated * 0.145; break;
            default: console.log("error");
                break;
        }

    } else {
        console.log("error");
    }
    if (commission != 0) {
        console.log(commission.toFixed(2));
    }
}

tradeCommissions(["Sofia", "500"]);