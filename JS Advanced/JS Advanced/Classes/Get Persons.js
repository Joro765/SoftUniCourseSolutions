function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    }


    let result = [];

    let person1 = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
    result.push(person1)
    let person2 = new Person("SoftUni");
    result.push(person2)
    let person3 = new Person("Stephan", "Johnson", 25);
    result.push(person3)
    let person4 = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
    result.push(person4)

    return result;
}

