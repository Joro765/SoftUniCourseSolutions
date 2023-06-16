function softUniReception(data) {

    let firstEmployee = Number(data[0]);
    let secondEmployee = Number(data[1]);
    let thirdEmployee = Number(data[2]);

    let totalRequestForHour = firstEmployee + secondEmployee + thirdEmployee;
    let hoursCount = 0;

    let studentsCount = Number(data[3]);

    while (studentsCount > 0) {
        hoursCount++; // Increment the hour in the beginning
        studentsCount -= totalRequestForHour; // do the calculations

        if (hoursCount % 4 === 0) { // every forth day increase hours (add 1 hour extra)
            hoursCount++;
        }
    }

    console.log(`Time needed: ${hoursCount}h.`);


}


softUniReception(["3", "2", "5", "40"])