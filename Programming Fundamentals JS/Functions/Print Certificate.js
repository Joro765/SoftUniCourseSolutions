function printCertificate(grade, names) {

    printHeader();
    printNames(names);
    formatGrade(grade);

}


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

function printHeader() {
    console.log('~~~- {@} -~~~');
    console.log('~- Certificate -~');
    console.log('~~~- ~---~ -~~~');
}


function printNames(value) {
    console.log(`${value[0]} ${value[1]}`);
}


printCertificate(6, ["Georgi", "Georgiev"]);