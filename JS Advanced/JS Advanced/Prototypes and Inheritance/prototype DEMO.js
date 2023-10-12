// Конструктор функция
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Закачаме на прототипа на класа функция, която ще се наследи от всички инстанции вдигнати от този клас
Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

let person1 = new Person("Joro", "Georgiev");
let person2 = new Person("Vasi", "Markova");

console.log(person1.firstName);
console.log(person2.firstName);
console.log(person1.fullName());
console.log(person2.fullName());
// Функцията на двете инстанции е една и съща !!    
console.log(person1.fullName === person2.fullName);