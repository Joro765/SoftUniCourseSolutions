function movingTarget(data) {

    let targets = data.shift().split(" ").map(Number); // Creating array with targets

    let index = 0;
    let command = data[index];

    while (command !== "End") {
        let event = command.split(" "); // Command array
        let task = event[0]; // Command

        if (task === "Shoot") {
            let i = Number(event[1]);
            let power = Number(event[2]);
            if (i >= 0 && i < targets.length) {
                targets[i] -= power;
                    targets.splice(i, 1);
                }
            }
        }

        if (task === "Add") {
            let i = Number(event[1]);
            let value = Number(event[2]);

            if (i >= 0 && i < targets.length) {
                targets.splice(i, 0, value); // Add new target with value replacing current target at index.
            } else {
                console.log("Invalid placement!");
            }
        }

        if (task === "Strike") {
            let i = Number(event[1]);
            let radius = Number(event[2]);
            let count = 1 + radius * 2;

            if (i - radius >= 0 && i + radius < targets.length) {
                targets.splice(i - radius, count);
            } else {
                console.log("Strike missed!");
            }
        }


        index++;
        command = data[index];
    }


    console.log(targets.join("|"));


}

movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]))