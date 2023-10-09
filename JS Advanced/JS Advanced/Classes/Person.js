class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}


let person1 = new Person("Joro", "Georgiev", 27, "jorogeorgiev765@gmail.com");

console.log(person1.toString());