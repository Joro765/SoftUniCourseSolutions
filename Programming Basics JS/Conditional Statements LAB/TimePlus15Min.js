function add15Min(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let newMinutes = minutes + 15;
    let finalMinutes = 0;

    if (newMinutes >= 60) {
        finalMinutes = (newMinutes % 60);
        hours += 1;
        newMinutes = finalMinutes;

    }

    if (newMinutes < 10) {
        newMinutes = `0${newMinutes}`
    }

    if (hours === 24) {
        hours = 0;
    }

    console.log(`${hours}:${newMinutes}`);

}


add15Min(["1", "46"]);







// Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. 
// Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. 
// Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.