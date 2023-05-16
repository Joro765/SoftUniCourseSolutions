function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = 1;
    let avgMark = 0;
    let hasFailed = false;
    let badGrade = 0;

    while (grade <= 12) {
        let mark = Number(input[index]);
        index++;

        if (mark < 4.00) {
            badGrade++;
            if (badGrade > 1) {
                hasFailed = true;
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
            continue;
        }
        avgMark += mark;
        grade++;
    }

    if (!hasFailed) {
        console.log(`${name} graduated. Average grade: ${(avgMark / 12).toFixed(2)}`);
    }


}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);