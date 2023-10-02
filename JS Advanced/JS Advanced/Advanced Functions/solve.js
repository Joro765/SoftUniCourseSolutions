const cat = {
    name: "Sharo",
    age: 7,
    grow(ageCount) {
        this.age += ageCount;
        console.log(`${this.name} is ${this.age} years old!`);
    },
    sayHello() {
        console.log(`${this.name} says HELLO`);
    }
}

// Вадим функцията от даден обект и я пристояваме на променлива, която вече носи функцията
let growFunc = cat.grow;


const anotherCat = {
    name: "Pisi",
    age: 5
}


// Извикваме функцията в контекста на друг обект и може да подадем параметри ако са необходими
// APPLY ни позволява да дадем допълните параметри като масив - иначе са еди и същи с CALL
growFunc.call(anotherCat, 5)



// BIND - създава нова функция, чийто this сочи към оригиналния обект. Ако не се ползва байнд this-a ще е undefined

greet = cat.sayHello.bind(cat)
greet() // Това извикване на новата функция директно се обръща към обекта от който е взета


// Example for nested functions
function sayHello() {
    return "HELLO";
}

function greeting(func, text) {
    return func() + " " + text
}

let result = greeting(sayHello, "JavaScript")


console.log(result);