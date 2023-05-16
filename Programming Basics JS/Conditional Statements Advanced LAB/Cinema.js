function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (movieType === "Premiere") {
        income = 12 * (rows * columns);
    } else if (movieType === "Normal") {
        income = 7.50 * (rows * columns);
    } else if (movieType === "Discount") {
        income = 5 * (rows * columns);
    }

    console.log(income.toFixed(2));
}

cinema(["Premiere", "10", "12"]);