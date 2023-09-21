const person = {
    firstName: "Joro",
    lastName: "Georgiev",

    fullName: function () {
        console.log(`${this.firstName} - ${this.lastName}`);
    }
}


// Взимаме функцията от обекта в отделна променлива
let getFullName = person.fullName;

const anotherPerson = {
    firstName: "Boris",
    lastName: "Dali"
}

// Подаваме я на друг обект за да я използва
anotherPerson.fullName = getFullName;

anotherPerson.fullName()

