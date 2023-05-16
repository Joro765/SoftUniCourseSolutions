function catFood(input) {
    let catCount = Number(input[0]);

    let smallCats = 0;
    let bigCats = 0;
    let hugeCats = 0;
    let foodEaten = 0;

    for (i = 1; i <= catCount; i++) {
        let currentCat = Number(input[i]);

        if (currentCat >= 100 && currentCat < 200) {
            smallCats++;
        } else if (currentCat >= 200 && currentCat < 300) {
            bigCats++
        } else if (currentCat >= 300 && currentCat < 400) {
            hugeCats++
        }

        foodEaten += currentCat;
    }

    let totalFood = foodEaten / 1000;
    let foodPrice = totalFood * 12.45;

    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${bigCats} cats.`);
    console.log(`Group 3: ${hugeCats} cats.`);
    console.log(`Price for food per day: ${foodPrice.toFixed(2)} lv.`);


}



catFood(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"])


    // "Group 1: {броят на котките в група 1: малки котки} cats."
    // "Group 2: {броят на котките в група 2: големи котки} cats."
    // "Group 3: {броят на котките в група 3: огромни котки} cats."
    // "Price for food per day: {цената за храната} lv."