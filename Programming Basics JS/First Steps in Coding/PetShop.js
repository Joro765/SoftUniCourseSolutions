function PetShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;
    result = (dogFood * dogFoodPrice) + (catFood * catFoodPrice);
    console.log(`${result} lv.`)
}

PetShop(["5", "4"])