function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let months = Number(input[1]);
    let interest = Number(input[2]);

    let interestEarned = depositSum * (interest / 100);
    let interestPerMonth = interestEarned / 12;
    let finalSum = depositSum + (months * interestPerMonth);
    console.log(finalSum);

}

depositCalculator(["200", "3", "5.7"]);

