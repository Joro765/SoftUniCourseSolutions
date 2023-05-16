function movieProfit(input) {
    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let total = days * (tickets * ticketPrice);

    let cinemaIncome = (total * cinemaPercent) / 100;

    console.log(`The profit from the movie ${movieName} is ${(total - cinemaIncome).toFixed(2)} lv.`);

}



movieProfit(["Python Basics",
    "40",
    "34785",
    "10.45",
    "14"]);
