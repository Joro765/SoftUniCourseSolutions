function pirateGame(data) {

    // Object to store towns - population and gold
    let targets = {};

    // Cut first line of the input
    let command = data.shift();


    // Adding towns into an object before command Sail
    while (command !== "Sail") {
        let tokens = command.split("||");
        let town = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (targets.hasOwnProperty(town)) {
            targets[town][0] += population;
            targets[town][1] += gold;
        } else {
            targets[town] = [population, gold];
        }

        command = data.shift();
    }


    // Take new command for the next loop
    command = data.shift();


    while (command !== "End") {
        let tokens = command.split("=>");
        let task = tokens[0];
        let town = tokens[1];

        switch (task) {
            case "Plunder":
                let peopleKilled = Number(tokens[2]);
                let goldStolen = Number(tokens[3]);

                // Susbtract people and gold from town
                targets[town][0] -= peopleKilled;
                targets[town][1] -= goldStolen;

                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

                // Delete town from object if people or gold <= 0 
                if (targets[town][0] <= 0 || targets[town][1] <= 0) {
                    delete targets[town];
                    console.log(`${town} has been wiped off the map!`);
                }

                break;


            case "Prosper":
                let goldAdded = Number(tokens[2]);

                // Check if gold is negative
                if (goldAdded < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    targets[town][1] += goldAdded;
                    console.log(`${goldAdded} gold added to the city treasury. ${town} now has ${targets[town][1]} gold.`);
                }
                break;
        }

        command = data.shift();
    }


    // Print elements
    if (Object.keys(targets).length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        let count = Object.keys(targets).length;
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (const element of Object.entries(targets)) {
            console.log(`${element[0]} -> Population: ${element[1][0]} citizens, Gold: ${element[1][1]} kg`);

        }
    }
}


pirateGame((["Tortuga||200000||1000",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]))