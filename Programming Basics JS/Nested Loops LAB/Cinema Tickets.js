function cinemaTickets(input) {
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let movie = command;
        let placesAvailable = Number(input[index]);
        index++;

        let command2 = input[index]; // Като имаме вложени WHILE с 2 условия си правим и втори команд !!!!
        index++;

        let placeTaken = 0;

        while (command2 !== "End") {
            let ticketType = command2;
            placeTaken++;

            if (ticketType === "standard") {
                standardTickets++;
            } else if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            }

            if (placeTaken === placesAvailable) {
                break;
            }

            command2 = input[index];  // Инкрементираме индекса на втория команд !!!!
            index++;
        }

        let percent = (placeTaken / placesAvailable) * 100;
        console.log(`${movie} - ${percent.toFixed(2)}% full.`);

        command = input[index];  // Инкрементираме индекса на първия команд !!!!
        index++;
    }
    let totalTickets = standardTickets + studentTickets + kidTickets
    let standardPercent = (standardTickets / totalTickets) * 100;
    let studentPercent = (studentTickets / totalTickets) * 100;
    let kidPercent = (kidTickets / totalTickets) * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"])