function summerOutfit(input) {
    let temp = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;
    let isValid = true;

    if (temp >= 10 && temp <= 18) {
        switch (timeOfDay) {
            case "Morning": outfit = "Sweatshirt"; shoes = "Sneakers"; break;
            case "Afternoon": outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
            default: console.log("ERROR"); isValid = false;
                break;
        }
    } else if (temp > 18 && temp <= 24) {
        switch (timeOfDay) {
            case "Morning": outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Afternoon": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
            default: console.log("ERROR"); isValid = false;
                break;
        }
    } else if (temp >= 25) {
        switch (timeOfDay) {
            case "Morning": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Afternoon": outfit = "Swim Suit"; shoes = "Barefoot"; break;
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"; break;
            default: console.log("ERROR"); isValid = false;
                break;
        }
    } else {
        isValid = false;
        console.log("ERROR");
    }


    if (isValid === true) {
        console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
    }
}

summerOutfit(["15", "Morning"]);