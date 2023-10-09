class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`${this.name} says: Hello!`);
    }
}




const person1 = new Person("Joro", 27);


person1.sayHello()