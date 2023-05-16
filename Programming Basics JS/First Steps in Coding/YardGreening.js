function yardGreening(input) {
    let area = Number(input[0]);
    let pricePerSquare = 7.61;
    let discount = 0.18;

    let bill = area * pricePerSquare;
    let personalDiscount = discount * bill;
    let finalBill = bill - personalDiscount;
    console.log(`The final price is: ${finalBill} lv.`);
    console.log(`The discount is: ${personalDiscount} lv.`);
}

yardGreening(["550"])