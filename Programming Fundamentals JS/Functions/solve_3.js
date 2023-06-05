function printCertificate(firstName, lastName, grade) {

    // Print full name
    printName(firstName, lastName);

    // Check if passed exam
    if (isPassed(grade) === true) {
        printHeader(); // Print Header if passed
    } else {
        console.log(`Sorry ${firstName} you did not pass the exam`); // Print this is failed
    }


    // Print Full Name
    function printName(a, b) {
        console.log(`${a} ${b}`);
    }


    // Print Certificate if grade is above 5
    function printHeader() {
        console.log("~~~  Certificate  ~~~");
        console.log("~~~~     @       ~~~~");
        console.log("~~~~   ~~~~~   ~~~~");
    }


    // Check if grade is above 5
    function isPassed(x) {
        if (x >= 5) {
            return true;
        } else {
            return false;
        }

    }

}



printCertificate("Georgi", "Georgiev", 5.50);