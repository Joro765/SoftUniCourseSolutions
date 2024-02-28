let student = {
    name: "Joro",
    age: 27,
    course: "Computer Science",
    grades: [5, 6, 5, 5, 6, 6, 6]
}


for (const [key, value] of Object.entries(student)) {
    if (typeof value === "object") {
        let buff = "grades:";
        let grades = Array.from(value);
        for (let x of grades) {
            buff += ` ${x}`;
        }
        console.log(buff);
    } else {
        console.log(`${key}: ${value}`);
    }
}