class Car {
    constructor(make, year, color, owner) {
        this.make = make;
        this.year = year;
        this.color = color;
        this.owner = owner;
    }

}


let carA = new Car("Audi", 2014, "grey", "Joro");
let carB = new Car("VW", 2007, "black", "Joro");
let carC = new Car("BMW", 2004, "white", "Ivaylo");
let carD = new Car("Alfa", 2018, "red", "Vasi");


let cars = [];

cars.push(carA);
cars.push(carB);
cars.push(carC);
cars.push(carD);

let ownerPrint = "Joro";

let filtered = cars.filter((i) => i.owner === ownerPrint);

filtered.forEach((i) => console.log(i.make));