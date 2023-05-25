function spiceMining(yield) {

    let days = 0;
    let spiceAmount = 0;
    let workersConsumption = 26;

    while (yield >= 100) {
        spiceAmount += yield;
        days++;
        spiceAmount -= workersConsumption;
        yield -= 10;

    }

    if (spiceAmount >= workersConsumption) {
        spiceAmount -= workersConsumption;
    }

    console.log(days);
    console.log(spiceAmount);

}


spiceMining(450)