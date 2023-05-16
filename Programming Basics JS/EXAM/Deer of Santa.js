function deerOfSanta(input) {
    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let foodFirstDeer = Number(input[2]);
    let foodSecondDeer = Number(input[3]);
    let foodThirdDeer = Number(input[4]);


    let requiredFoodFirstDeer = foodFirstDeer * days;
    let requiredFoodSecondDeer = foodSecondDeer * days;
    let requiredFoodThirdDeer = foodThirdDeer * days;

    let requiredFoodAllDeers = requiredFoodFirstDeer + requiredFoodSecondDeer + requiredFoodThirdDeer;

    if (requiredFoodAllDeers <= foodKg) {
        let foodLeft = foodKg - requiredFoodAllDeers;
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        let foodRequired = requiredFoodAllDeers - foodKg;
        console.log(`${Math.ceil(foodRequired)} more kilos of food are needed.`);
    }

}




deerOfSanta(["2",
    "10",
    "1",
    "1",
    "2"])





