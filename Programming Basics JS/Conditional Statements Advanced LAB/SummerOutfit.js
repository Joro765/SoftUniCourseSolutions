function summerOutfit(input) {
    let temp = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;

    if (timeOfDay === "Morning") {
        if (temp >= 10 && temp <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (temp > 18 && temp <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temp >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (timeOfDay === "Afternoon") {
        if (temp >= 10 && temp <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temp > 18 && temp <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (temp >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (timeOfDay === "Evening") {
        if (temp >= 10 && temp <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temp > 18 && temp <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temp >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)


}

summerOutfit(["16", "Morning"]);