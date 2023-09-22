function createCar(car) {

    // Initial car
    let resultCar = {
        model: car.model,
        engine: {},
        carriage: { type: car.carriage, color: car.color },
        wheels: null
    };


    // Wheels
    let wheelSize = car.wheelsize;

    if ((wheelSize % 2) === 0) {
        wheelSize = wheelSize - 1;
    }

    resultCar.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];


    // Engine

    let engines = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }

    let engineChoice;

    if (car.power <= engines["Small engine"].power) {
        engineChoice = engines["Small engine"];
    } else if (car.power <= engines["Normal engine"].power) {
        engineChoice = engines["Normal engine"];
    } else {
        engineChoice = engines["Monster engine"];
    }

    resultCar.engine = engineChoice;



    return resultCar;

}



createCar({
    model: 'Opel Vectra',

    power: 110,

    color: 'grey',

    carriage: 'coupe',

    wheelsize: 17
})