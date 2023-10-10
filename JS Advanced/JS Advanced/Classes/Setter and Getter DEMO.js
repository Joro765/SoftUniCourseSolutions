class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName} says Hello!`
    }

    set firstName(value) {
        if (!value || value.length < 3) {
            throw new Error("Name must be at least 3 characters long!")
        }
        this._firstName = value;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        if (!value || value.length < 3) {
            throw new Error("Name must be at least 3 characters long!")
        }
        this._lastName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set age(value) {
        if (!value || value <= 0) {
            throw new Error("Age must be a positive number!")
        }
        this._age = value;
    }

    get age() {
        return this._age;
    }
}


let person1 = new Person("Joro", "Georgiev", 27);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
person1.firstName = "Joro"
console.log(person1.sayHello());

for (let key in person1) {
    console.log(key);
}