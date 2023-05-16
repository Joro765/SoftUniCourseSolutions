function catLife(input) {
    let type = input[0];
    let gender = input[1];
    let maxYears = 0;
    let isValid = true;

    switch (type) {
        case "British Shorthair":
            if (gender === "m") {
                maxYears = 13;
            } else {
                maxYears = 14;
            }
            break;
        case "Siamese":
            if (gender === "m") {
                maxYears = 15;
            } else {
                maxYears = 16;
            }
            break;
        case "Persian":
            if (gender === "m") {
                maxYears = 14;
            } else {
                maxYears = 15;
            }
            break;
        case "Ragdoll":
            if (gender === "m") {
                maxYears = 16;
            } else {
                maxYears = 17;
            }
            break;
        case "American Shorthair":
            if (gender === "m") {
                maxYears = 12;
            } else {
                maxYears = 13;
            }
            break;
        case "Siberian":
            if (gender === "m") {
                maxYears = 11;
            } else {
                maxYears = 12;
            }
            break;
        default:
            console.log(`${type} is invalid cat!`);
            isValid = false;
            break;
    }


    let humanMonths = maxYears * 12;
    let catMonths = humanMonths / 6;

    if (isValid === true) {
        console.log(`${Math.floor(catMonths)} cat months`);
    }
}


catLife(["Persian",
    "m"])