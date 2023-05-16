function puppy(input) {
    let index = 0;
    let startingFood = Number(input[index]) * 1000;
    index++;
    let command = input[index];
    index++;
    let foodEaten = 0;


    while (command !== "Adopted") {
        let food = Number(command);

        foodEaten += food;

        command = input[index];
        index++;
    }

    if (startingFood >= foodEaten) {
        console.log(`Food is enough! Leftovers: ${startingFood - foodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodEaten - startingFood} grams more.`);
    }


}


puppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])