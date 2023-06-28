class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    speak() {
        console.log(`${this.name} has ${(this.grade).toFixed(2)} on the exam.`);
    }
}


let student1 = new Student("Joro", 6.00);
let student2 = new Student("Vasi", 6.00);

student1.speak();
student2.speak();