function movie(input) {
    let movie = input[0];
    let type = input[1];
    let ticketsCount = Number(input[2]);
    let price = 0;

    switch (movie) {
        case "John Wick":
            if (type === "Drink") {
                price += 12;
            } else if (type === "Popcorn") {
                price += 15;
            } else if (type === "Menu")
                price += 19;
            break;
        case "Star Wars":
            if (type === "Drink") {
                price += 18;
            } else if (type === "Popcorn") {
                price += 25;
            } else if (type === "Menu")
                price += 30;
            break;
        case "Jumanji":
            if (type === "Drink") {
                price += 9;
            } else if (type === "Popcorn") {
                price += 11;
            } else if (type === "Menu")
                price += 14;
            break;

        default:
            console.log("ERROR");
    }

    if (movie === "Star Wars" && ticketsCount >= 4) {
        price -= price * 0.3;
    }

    if (movie === "Jumanji" && ticketsCount === 2) {
        price -= price * 0.15;
    }

    let totalPrice = ticketsCount * price;

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);

}

movie(["John Wick",
    "Drink",
    "6"])