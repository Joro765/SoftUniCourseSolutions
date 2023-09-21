function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            }
        },
        hasAudio(car) { },
        hasParktronic(car) { }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: "Toyota",
    model: "Avensis"
}