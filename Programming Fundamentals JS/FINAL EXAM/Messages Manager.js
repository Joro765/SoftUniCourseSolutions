function messagesManager(data) {

    let capacity = Number(data.shift());

    let result = {};


    command = data.shift();

    while (command !== "Statistics") {
        let tokens = command.split("=")
        let task = tokens[0];



        let sent;
        let received;

        let currentSent;
        let currentReceived;


        switch (task) {
            case "Add":
                let user = tokens[1];
                sent = Number(tokens[2]);
                received = Number(tokens[3]);

                if (result.hasOwnProperty(user)) {
                    break;
                } else {
                    result[user] = [sent, received];
                }
                break;


            case "Message":
                let sender = tokens[1];
                let receiver = tokens[2];

                currentSent = Number(result[sender][0]);
                currentReceived = Number(result[receiver][1]);

                if (result.hasOwnProperty(sender) && result.hasOwnProperty(receiver)) {
                    result[sender][0] = currentSent + 1;
                    result[receiver][1] = currentReceived + 1;

                    if ((result[sender][0] + result[sender][1]) === capacity) {
                        delete result[sender];
                        console.log(`${sender} reached the capacity!`);
                    }

                    if ((result[receiver][1] + result[receiver][0]) === capacity) {
                        delete result[receiver];
                        console.log(`${receiver} reached the capacity!`);
                    }
                }
                break;


            case "Empty":
                let text = tokens[1];

                if (text === "All") {
                    Object.keys(result).forEach(key => delete result[key]);
                } else {
                    if (result.hasOwnProperty(text)) {
                        delete result[text];
                    }
                }

                break;

        }


        command = data.shift();
    }


    let usersCount = Object.keys(result).length;

    if (usersCount > 0) {
        console.log(`Users count: ${usersCount}`);
    } else {
        console.log(`Users count: 0`);
    }


    for (const element of Object.entries(result)) {
        let person = element[0];
        let totalMessages = Number(element[1][0]) + Number(element[1][1]);

        console.log(`${person} - ${totalMessages}`);
    }


}


messagesManager(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"])