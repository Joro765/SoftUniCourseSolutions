function readBooks(input) {
    let remainingPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysRequired = Number(input[2]);

    let totalHoursPerBook = remainingPages / pagesPerHour;
    let hoursPerDay = totalHoursPerBook / daysRequired;

    console.log(hoursPerDay);

}

readBooks(["212", "20", "2"]);