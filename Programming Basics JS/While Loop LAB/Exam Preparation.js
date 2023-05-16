function examPreparation(input) {
    let index = 0;

    let negativeGradeCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let negativeCounter = 0;
    let taskCounter = 0;
    let avgGrade = 0;
    let lastTask = "";
    let isFinished = false;

    while (command !== "Enough") {
        let taskName = command;
        let grade = Number(input[index]);
        index++;


        if (grade <= 4) {
            negativeCounter++;
            if (negativeGradeCount === negativeCounter) {
                isFinished = true;
                break;
            }
        }

        taskCounter++;
        avgGrade += grade;
        lastTask = taskName;

        command = input[index];
        index++;
    }

    if (isFinished === true) {
        console.log(`You need a break, ${negativeCounter} poor grades.`);
    } else {

        console.log(`Average score: ${(avgGrade / taskCounter).toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastTask}`);
    }

}







examPreparation(["3",

    "Money",

    "6",

    "Story",

    "4",

    "SpringTime",

    "5",

    "Bus",

    "6",

    "Enough"]);