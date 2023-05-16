function projects(input) {
    let index = 0;
    let judgesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let studentFinal = 0;
    let projectsCount = 0;

    while (command != "Finish") {
        let projectName = command;
        let projectMark = 0;

        let command2 = input[index];
        let marksCount = 0;
        projectsCount++;

        while (marksCount < judgesCount) {
            let mark = Number(command2);
            index++

            projectMark += mark;
            marksCount++;

            command2 = input[index];
        }

        let avgProjectMark = projectMark / judgesCount;
        console.log(`${projectName} - ${avgProjectMark.toFixed(2)}.`);

        studentFinal += projectMark
        command = input[index];
        index++;
    }

    let marksCountCOunt = projectsCount * judgesCount;
    studentFinal = studentFinal / marksCountCOunt;
    console.log(`Student's final assessment is ${studentFinal.toFixed(2)}.`);


}

projects(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"])