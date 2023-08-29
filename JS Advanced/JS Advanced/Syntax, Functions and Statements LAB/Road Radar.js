function solve(speed, area) {

    let obj = {
        "residential": 20,
        "city": 50,
        "interstate": 90,
        "motorway": 130
    }

    let speedDifference = 0;
    let isValid = true;
    let penalty;

    if (obj.hasOwnProperty(area)) {
        let speedLimit = Number(obj[area]);

        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {

            speedDifference = speed - speedLimit;
            isValid = false;
        }

        if (isValid === false) {
            if (speedDifference <= 20) {
                penalty = "speeding";
            } else if (speedDifference <= 40) {
                penalty = "excessive speeding";
            } else {
                penalty = "reckless driving";
            }

            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${penalty}`);
        }
    }

}


solve(40, 'city')