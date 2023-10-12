let car = {
    make: "Audi",
    model: "Q5",
    year: 2014
}

// Добавяме препърти color, което не се обхожда в цикъл // Writable: false значи, че не можем да променяме пропъртито // Configurable: false - не можем да трием пропъртито
Object.defineProperty(car, "color", { enumerable: false, writable: false, configurable: false, value: "grey" });



