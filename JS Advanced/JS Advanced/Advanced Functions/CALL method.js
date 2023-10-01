function printPersonalInfo(...args) {
    let info = (`${this.name} is a ${this.profession} \n`);
    let hobbies = "Hobbies: \n";
    for (const el of args) {
        hobbies += `-- ${el}\n`;
    }
    return info += hobbies
}


const person1 = {
    name: "Joro",
    profession: "WEB Developer"
}

// Извиква функция с паремтрите на обект
console.log(printPersonalInfo.call(person1))

