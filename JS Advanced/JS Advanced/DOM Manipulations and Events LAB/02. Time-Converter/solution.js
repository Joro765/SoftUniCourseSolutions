function attachEventsListeners() {
    let daysButton = document.getElementById("daysBtn");
    let hoursButton = document.getElementById("hoursBtn");
    let minutesButton = document.getElementById("minutesBtn");
    let secondsButton = document.getElementById("secondsBtn");

    let daysField = document.getElementById("days");
    let hoursField = document.getElementById("hours");
    let minutesField = document.getElementById("minutes");
    let secondsField = document.getElementById("seconds");



    daysButton.addEventListener("click", calcDays);
    hoursButton.addEventListener("click", calcHours);
    minutesButton.addEventListener("click", calcMinutes);
    secondsButton.addEventListener("click", calcSeconds);


    let days = 0;
    let hours = 0;
    let mins = 0;
    let secs = 0;


    function calcDays() {
        days = Number(daysField.value);

        hoursField.value = days * 24;
        minutesField.value = hoursField.value * 60;
        secondsField.value = minutesField.value * 60;
    }

    function calcHours() {
        hours = Number(hoursField.value);

        minutesField.value = hours * 60;
        secondsField.value = minutesField.value * 60;
        daysField.value = hours / 24;
    }

    function calcMinutes() {
        mins = Number(minutesField.value);

        secondsField.value = mins * 60;
        hoursField.value = mins / 60;
        daysField.value = hoursField.value / 24;
    }

    function calcSeconds() {
        secs = Number(secondsField.value);

        minutesField.value = secs / 60;
        hoursField.value = minutesField.value / 60;
        daysField.value = hoursField.value / 24;
    }
}