function cinema(input) {
    let index = 0;

    let capacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let ticketPrice = 5;
    let totalPrice = 0;
    let isFull = false;

    while (command !== "Movie time!") {
        let peopleCount = Number(command);
        let currentPrice = 0;


        if (capacity >= peopleCount) {
            if (peopleCount % 3 === 0) {
                currentPrice = (peopleCount * ticketPrice) - 5;
            } else {
                currentPrice = peopleCount * ticketPrice;
            }
        }

        totalPrice += currentPrice;
        capacity -= peopleCount;

        if (capacity < 0) {
            isFull = true;
            break;
        }

        command = input[index];
        index++;

    }



    if (isFull === true) {
        console.log(`The cinema is full.`);
        console.log(`Cinema income - ${totalPrice} lv.`);
    } else {
        console.log(`There are ${capacity} seats left in the cinema.`);
        console.log(`Cinema income - ${totalPrice} lv.`);
    }
}


cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])