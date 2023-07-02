function piccolo(data) {

    let result = {};

    for (const info of data) {
        let car = info.split(", ")

        // Enter Cars
        if (car[0] === "IN") {
            result[car[1]] = true;
            //  Delete cars
        } else {
            delete result[car[1]];
        }
    }

    // Sort by keys (number of car) of object
    let sortedArray = Object.keys(result).sort((a, b) => a.localeCompare(b));


    // Check if onject is empty. If not print cars
    if (Object.keys(result).length > 0) {
        for (const car of sortedArray) {
            console.log(car);

        }
    } else {
        console.log("Parking Lot is Empty");
    }

}


piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])