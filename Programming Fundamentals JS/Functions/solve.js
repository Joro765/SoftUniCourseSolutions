function solve(firstName, lastName, grade1, grade2) {

    // Prints Full Name
    let fullName = function (first, last) {
        console.log(`${first} ${last}`);
    }

    // Calculates and Prints Final Year Grade
    let yearGrade = function (a, b) {
        let finalGrade = (grade1 + grade2) / 2;
        console.log(`Your final grade: ${finalGrade.toFixed(2)}`);
    }

    // Invoke the functions
    fullName(firstName, lastName);
    yearGrade(grade1, grade2);


}

solve("Joro", "Georgiev", 5.50, 5.25);