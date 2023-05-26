function dayOfWeek(day) {

    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (day > 0 && day < 8) {
        console.log(daysOfWeek[day - 1]);
    } else {
        console.log("Invalid day!");
    }

}

dayOfWeek(1)