function swimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let lengthMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let ivanTime = lengthMeters * secondsPerMeter;
    let addedSeconds = Math.floor(lengthMeters / 15) * 12.5;

    let finalTime = ivanTime + addedSeconds;

    if (finalTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(finalTime - recordSeconds).toFixed(2)} seconds slower.`)
    }
}

swimmingRecord(["10464", "1500", "20"]);
