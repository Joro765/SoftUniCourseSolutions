function solve(totalSteps, stepLength, studentSpeed) {

    let distanceMeters = totalSteps * stepLength;

    let speedMeterInSec = studentSpeed / 3.6;

    let time = distanceMeters / speedMeterInSec;

    let rest = Math.floor(distanceMeters / 500);

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = (time - (minutes * 60)).toFixed(0);

    minutes += rest;


    let formattedH = hours < 10 ? `0${hours}` : `${hours}`;
    let formattedM = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let formattedS = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}


solve(4000, 0.60, 5)