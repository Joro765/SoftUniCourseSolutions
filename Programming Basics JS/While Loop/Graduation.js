function graduation(input) {
    let name = input[0];
    let index = 1;
    let mark = Number(input[index]);
    let grade = 0;
    let fail = 0;
    let averageMark = 0;

    while (true) {
        let yearMark = mark;

        if (yearMark >= 4) {
            grade++;
            averageMark += yearMark;
        } else {
            fail++;
        }

        index++;
        mark = Number(input[index]);

        if (grade >= 12) {
            console.log(`${name} graduated. Average grade: ${(averageMark / 12).toFixed(2)}`);
            break;
        }

        if (fail > 1) {
            console.log(`${name} has been excluded at ${grade + 1} grade`);
            break;
        }
    }

}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);