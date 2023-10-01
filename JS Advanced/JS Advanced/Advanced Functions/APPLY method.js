const firstPerson = {
    name: "Joro",
    age: 27,

    shareInfo: function () {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}


const secondPerson = {
    name: "Vasi",
    age: 26
}


// Извиква фукция от един обект на друг обект
firstPerson.shareInfo.apply(secondPerson)

