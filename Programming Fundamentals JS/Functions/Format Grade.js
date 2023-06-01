function formatGrade(grade) {

    let result;

    if (grade < 3) {
        result = "Fail";
        grade = 2;
    } else if (grade >= 3 & grade < 3.50) {
        result = "Poor";
    } else if (grade >= 3.50 && grade < 4.50) {
        result = "Good";
    } else if (grade >= 4.50 && grade < 5.00) {
        result = "Very good";
    } else {
        result = "Excellent";
    }

    if (grade === 2) {
        console.log(`${result} (${grade})`);
    } else {
        console.log(`${result} (${grade.toFixed(2)})`);
    }

}


formatGrade(2.99)