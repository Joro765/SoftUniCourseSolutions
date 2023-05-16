function workOrWeekend(input) {
    let day = input[0].toLowerCase();

    switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            console.log("Working day")
            break;
        case "saturday":
        case "sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error")
            break;
    }

}


workOrWeekend(["Monday"]);