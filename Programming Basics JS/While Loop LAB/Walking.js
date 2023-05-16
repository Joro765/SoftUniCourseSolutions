function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    let goal = 10000;
    let count = 0;
    let isDone = false;


    while (true) {
        if (command === "Going home") {
            command = input[index];
            count = Number(command);
            goal -= Number(count);
            if (goal < 0) {
                isDone = true;
                break;
            }
            break;
        } else {
            count = Number(command);
            goal -= count;
        }

        if (goal <= 0) {
            isDone = true;
            break;
        }

        command = input[index];
        index++;
    }

    if (isDone === true) {
        console.log(`Goal reached! Good job!`);
        console.log((`${Math.abs(goal)} steps over the goal!`));
    } else {
        console.log(`${goal} more steps to reach goal.`);
    }


}

walking(["1500", "300", "2500", "3000", "Going home", "200"])