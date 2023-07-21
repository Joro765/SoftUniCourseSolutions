function adAstra(data) {
    // !!!! Когато имаме такава задача за обект, които може да съдържа дублиращи се елементи примерно храни да го правя с масив от обекти !!!!!

    // Regex
    let pattern = /([#|/])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm;

    let dailyCaloriesNeeded = 2000;
    let totalcalories = 0;

    // Regex match
    let match = pattern.exec(data);

    // Правя си масив за да събирам обекти вътре
    let foodArray = [];

    while (match) {
        // Създавам нов обект всеки път за всеки ред
        let food = {};
        let product = match.groups.item;
        let date = match.groups.date;
        let calories = match.groups.calories;

        // Calculate total calories
        totalcalories += Number(calories);

        // Adding into an object
        food = {
            product,
            date,
            calories
        }

        // Добавям обекта в масив
        foodArray.push(food)

        // Next match of Regex
        match = pattern.exec(data);
    }

    // Food for how many days
    let days = Math.floor((totalcalories / dailyCaloriesNeeded));


    console.log(`You have food to last you for: ${days} days!`);

    // Въртя цикъл по масив с обекти и си извличам инфото 
    for (const element of foodArray) {
        console.log(`Item: ${element.product}, Best before: ${element.date}, Nutrition: ${element.calories}`);
    }

}



adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right | 6.8.20 | 5 | '])