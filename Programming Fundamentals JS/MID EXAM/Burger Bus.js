function burgerBus(data) {

    let citiesCount = data.shift();

    let totalProfit = 0;

    let cityCounter = 0;


    for (let i = 0; i < data.length; i += 3) {
        cityCounter++;
        let cityProfit = 0;
        let city = data[i];
        let earnings = Number(data[i + 1]);
        let expenses = Number(data[i + 2]);

        let isRaining = false;

        if (cityCounter % 5 === 0) {
            earnings *= 0.9;
            isRaining = true;
        }


        if (cityCounter % 3 === 0 && isRaining === false) {
            expenses = expenses + (expenses * 0.5);
        }



        cityProfit = earnings - expenses;
        totalProfit += cityProfit;


        console.log(`In ${city} Burger Bus earned ${cityProfit.toFixed(2)} leva.`);

    }


    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

}

burgerBus((["5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20"]))