function foodForPets(input) {
    let days = Number(input[0]);
    let startingFood = Number(input[1]);
    let daysCount = 0;
    let eatenByCat = 0;
    let eatenByDog = 0;
    let biscuits = 0;

    for (let i = 2; i <= days * 2; i += 2) {
        let dog = Number(input[i]);
        let cat = Number(input[i + 1]);

        eatenByDog += dog;
        eatenByCat += cat;
        daysCount++;

        if (daysCount % 3 === 0) {
            biscuits += (dog + cat) * 0.10;

        }
    }

    let totalFoodEaten = eatenByCat + eatenByDog;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${(((eatenByCat + eatenByDog) / startingFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((eatenByDog / totalFoodEaten) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((eatenByCat / totalFoodEaten) * 100).toFixed(2)}% eaten from the cat.`);

}


foodForPets(["6",
    "2500",
    "100",
    "10",
    "210",
    "25",
    "320",
    "35",
    "40",
    "44",
    "50",
    "55",
    "660",
    "50"])


    // WHILE WHILE WHILE WHILE WHILE WHILE WHILE 
    
    // function solve(input) {
    //     let index = 0;
    //     let days = Number(input[index]);
    //     index++;
    //     let foodQuantity = Number(input[index]);
    //     index++;
    //     let dogQuantity = Number(input[index]);
    //     index++;
    //     let catQuantity = Number(input[index]);
    //     index++;
    //     let currentDay = 1;
    //     let dogFood = 0;
    //     let catFood = 0;
    //     let biscuits = 0;
     
    //     while (currentDay <= days) {
    //         if (currentDay % 3 == 0) {
    //             biscuits += (dogQuantity + catQuantity) * 0.1;
    //         }
     
    //         dogFood += dogQuantity;
    //         catFood += catQuantity;
    //         dogQuantity = Number(input[index]);
    //         index++;
    //         catQuantity = Number(input[index]);
    //         index++;
    //         currentDay++;
    //     }
     
    //     let total = dogFood + catFood;
    //     let dogP = ((dogFood / total) * 100).toFixed(2);
    //     let catP = ((catFood / total) * 100).toFixed(2);
    //     let totalP = ((total / foodQuantity) * 100).toFixed(2);
    //     console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    //     console.log(`${totalP}% of the food has been eaten.`);
    //     console.log(`${dogP}% eaten from the dog.`);
    //     console.log(`${catP}% eaten from the cat.`);
    // }