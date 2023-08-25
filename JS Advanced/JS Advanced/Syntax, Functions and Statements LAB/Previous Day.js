function solve(year, month, day) {

    let myDate = new Date(year, month - 1, day);

    myDate.setDate(myDate.getDate() - 1);

    let Newday = myDate.getDate();
    let Newmonth = myDate.getMonth() + 1;
    let Newyear = myDate.getFullYear();

    console.log(`${Newyear}-${Newmonth}-${Newday}`);


}


solve(2016, 1, 1)