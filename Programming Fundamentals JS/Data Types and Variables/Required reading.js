function requiredReading(pages, pagesPerHour, days) {

    let totalTime = pages / pagesPerHour;

    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);

}

requiredReading(212, 20, 2)