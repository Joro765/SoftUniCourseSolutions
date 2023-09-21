// Обект person
const person = {
    firstName: "Georgi",
    lastName: "Georgiev",
    age: 27
}


// Променливи с информация за град, които подаваме по-надолу като пропъртита на нов обект TOWN
let city = "Sofia";
let population = 2000000;
let country = "Bulgaria";

// Създаваме обект town с горните пропъртита
let town = { city, population, country };


// Закачаме обектът town като нестнат обект на обекта person
person.location = town;


console.log(person);