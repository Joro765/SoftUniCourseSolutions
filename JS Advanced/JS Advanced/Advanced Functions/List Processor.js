function solve(data) {

    let collection = [];

    for (const line of data) {

        function getCommand(command) {
            return function (text) {
                return text;
            }
        }


        let task = getCommand(line.split(" "));
        task = task(line.split(" "));

        let command;
        let text;

        if (task.length > 1) {
            command = task[0];
            text = task[1];
        } else {
            command = task[0];
        }


        switch (command) {
            case "add":
                collection.push(text);
                break;
            case "remove":
                collection = collection.filter(function (x) {
                    return x !== text;
                });
                break;
            case "print":
                console.log(collection.join(","));
                break;
        }




    }

}




solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);