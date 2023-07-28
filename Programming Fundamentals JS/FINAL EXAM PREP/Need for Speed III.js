function needForSpeed(data) {

    // Number of cars
    let n = Number(data.shift());

    // Object to store cars
    let cars = {};

    // Adding cars to Object
    for (let i = 0; i < n; i++) {
        let carInfo = data.shift().split("|");
        let model = carInfo[0];
        let mileage = Number(carInfo[1]);
        let fuel = Number(carInfo[2]);

        cars[model] = [mileage, fuel];

    }


    // Get Command from input
    let command = data.shift();


    // While command not STOP iterate 
    while (command !== "Stop") {
        let tokens = command.split(" : ");
        let car;
        let fuel;
        let distance;
        let currentFuel;
        let currentMileage;

        switch (tokens[0]) {
            case "Drive":
                car = tokens[1];
                distance = Number(tokens[2]);
                fuel = Number(tokens[3]);
                currentFuel = Number(cars[car][1]);
                currentMileage = Number(cars[car][0]);

                if (cars[car][1] >= fuel) {
                    cars[car][0] = currentMileage + distance;
                    cars[car][1] = currentFuel - fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }

                if (cars[car][0] >= 100000) {
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`);
                }

                break;


            case "Refuel":
                car = tokens[1];
                fuel = Number(tokens[2]);
                currentFuel = Number(cars[car][1]);

                if (currentFuel + fuel > 75) {
                    cars[car][1] = 75;
                    console.log(`${car} refueled with ${75 - currentFuel} liters`);
                } else {
                    cars[car][1] = currentFuel + fuel;
                    console.log(`${car} refueled with ${fuel} liters`)
                }

                break;


            case "Revert":
                car = tokens[1];
                distance = Number(tokens[2]);
                currentMileage = Number(cars[car][0]);

                if (currentMileage - distance < 10000) {
                    cars[car][0] = 10000;
                } else {
                    cars[car][0] = currentMileage - distance;
                    console.log(`${car} mileage decreased by ${distance} kilometers`);
                }

                break;
        }

        command = data.shift();
    }


    for (const element of Object.entries(cars)) {
        console.log(`${element[0]} -> Mileage: ${element[1][0]} kms, Fuel in the tank: ${element[1][1]} lt.`);
    }

}


needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])