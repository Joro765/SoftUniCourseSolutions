class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


//  Teacher наследява Person

class Teacher extends Person {
    constructor(firstName, lastName, subject) { // Приема същите неща в конструктора плюс новото, което го няма в Person
        super(firstName, lastName); // Със super казваме да вземе общите пропърита от класът родител - Person

        this.subject = subject;
    }
}


let teacher = new Teacher("Ivaylo", "Kenov", "JS Advanced")


console.log(teacher.fullName());