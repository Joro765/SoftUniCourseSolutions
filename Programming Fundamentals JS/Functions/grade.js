function grading(grade) {

    let result;

    if (grade < 3) {
        result = "FAIL";
    } else if (grade >= 3 && grade <= 4) {
        result = "GOOD";
    } else if (grade > 4 && grade <= 5) {
        result = "VERY GOOD";
    } else if (grade > 5) {
        result = "EXCELLENT";
    }
    printDiploma(result, grade);

    return result, grade;

}

function printDiploma(value1, value2) {
    let stars = 0;

    switch (value1) {
        case "FAIL": stars = 0; break;
        case "GOOD": stars = 3; break;
        case "VERY GOOD": stars = 4; break;
        case "EXCELLENT": stars = 5; break;
        default: console.log("ERROR");
    }

    console.log(`Your grade: ${value2}`);
    console.log("*".repeat(stars));
}

grading(4.20)

