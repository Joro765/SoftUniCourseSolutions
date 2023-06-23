class Dog {
    constructor(name) {
        this.name = name
    }

    bark() {
        console.log(`${this.name} wof wof`);
    }

}

let dog = new Dog("Sparky");
dog.bark()