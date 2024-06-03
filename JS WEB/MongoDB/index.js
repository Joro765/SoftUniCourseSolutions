const mongoose = require("mongoose");

// Връзване на node.js с Базата
async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/test1");

        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
}

// Осъщестяване на връзката
main();


// Създаване на схема
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
})


// Добавяне на метод към схемата. Всеки обект в базата ще притежава този метод
studentSchema.methods.getInfo = function () {
    console.log(`My name is ${this.name}. I am ${this.age} years old!`);
}


// Създаване на модел по схемата
const Student = mongoose.model("Student", studentSchema);


// Създаване на обект, готов за запис в базата
const student1 = new Student({
    name: "Joro",
    age: 28,
});



// Създаване на запис в базата
async function saveStudent(student) {
    try {
        await student.save();
        console.log("Student saved in DB");
    } catch (error) {
        console.log(error);
    }
}

saveStudent(student1);


// Четене от базата
async function getAll() {
    const students = await Student.find({});
    students.forEach(student => student.getInfo())
}


getAll();
