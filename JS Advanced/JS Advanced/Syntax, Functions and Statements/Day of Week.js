function dayOfWeek(input) {


    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (days.includes(input)) {
        console.log(days.indexOf(input) + 1);
    } else {
        console.log('error');
    }


}


dayOfWeek('Sunday')