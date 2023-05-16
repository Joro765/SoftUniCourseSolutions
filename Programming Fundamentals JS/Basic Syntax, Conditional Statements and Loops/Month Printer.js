function monthPrint(num) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (num >= 1 && num <= 12) {
        console.log(months[num - 1]); // Защото индексите започват от 0 а аз започвам от 1
    } else {
        console.log("Error!");
    }
}


monthPrint(2);