function addStart(car) {
    car.start = function () {
        console.log(`${car.model} is running...`);
    }
}


const car1 = {
    model: "Audi Q5",
    year: 2014
}


const car2 = {
    model: "Bmw M5",
    year: 2018
}


addStart(car1);
addStart(car2);


car1.start();
car2.start();