function solve(year, month, day) {

    let yesterday = new Date(year, month - 1, day);

    yesterday.setDate(yesterday.getDate() - 1);

    let newDay = yesterday.getDate();
    let newMonth = yesterday.getMonth() + 1;
    let newYear = yesterday.getFullYear();

    console.log(`${newYear}-${newMonth}-${newDay}`);

}


solve(2016, 9, 30)