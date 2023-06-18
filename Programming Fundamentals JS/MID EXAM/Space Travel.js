function spaceTravel(data) {

    let startingAmmo = data.pop();
    startingAmmo = Number(startingAmmo)
    let startingFuel = data.pop();
    startingFuel = Number(startingFuel)

    let index = 0;

    let arr = data[0].split("||"); // Spliting the arr by ||

    let command = arr[index]; // Taking the first command

    let isFailed = false;



    while (command !== "Titan") {
        let tokens = arr[index].split(" ");
        let task = tokens[0];


        switch (task) {
            case "Travel":
                let lightYears = Number(tokens[1]);



                if (startingFuel >= lightYears) {
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                    startingFuel -= lightYears;
                } else {
                    console.log(`Mission failed.`);
                    isFailed = true;
                    break;
                }
                break;


            case "Enemy":
                let enemyArmour = Number(tokens[1]);


                if (startingAmmo >= enemyArmour) {
                    startingAmmo -= enemyArmour;

                    console.log(`An enemy with ${enemyArmour} armour is defeated.`);
                } else {
                    if (enemyArmour * 2 <= startingFuel) {
                        console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                        startingFuel -= enemyArmour * 2;

                    } else {
                        console.log(`Mission failed.`);
                        isFailed = true;
                        break;
                    }
                }
                break;





            case "Repair":
                let amount = Number(tokens[1]);
                startingFuel += amount;
                startingAmmo += amount * 2;

                console.log(`Ammunitions added: ${amount * 2}.`);
                console.log(`Fuel added: ${amount}.`);
                break;
        }



        if (isFailed === true) {
            break;
        }



        index++;
        command = arr[index];
    }


    if (isFailed === false) {
        console.log("You have reached Titan, all passengers are safe.");
    }



}


spaceTravel((['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']))