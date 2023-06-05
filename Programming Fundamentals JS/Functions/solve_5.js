function studentInfo(firstName, lastName, course, grade) {

    // Returns Full Name.
    function fullName(first, last) {
        return first + " " + last;
    }

    // Returns course and grade.
    function courseGrade(a, b) {
        return `Course: ${a} with grade: ${b}`;
    }

    // Print result of other two functions.
    function printInfo(x, y) {
        console.log(x);
        console.log(y);
    }

    // Saving the result of the two functions into variables.
    let studentName = fullName(firstName, lastName);
    let studentCourse = courseGrade(course, grade);


    // Pass the variables into the print function.
    printInfo(studentName, studentCourse);

}


studentInfo("Georgi", "Georgiev", "Computer Science", 5.50);