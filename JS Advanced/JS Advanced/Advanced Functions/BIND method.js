const person1 = {
    name: "Joro",
    age: 27,
    printInfo() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const person2 = {
    name: "Vasi",
    age: 26
}

const getSecondPersonPrintInfo = person1.printInfo.bind(person2);

console.log(getSecondPersonPrintInfo);