function sumSeconds(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let result = time1 + time2 + time3;
    let overalMinutes = Math.floor(result / 60);
    let overalSeconds = result % 60;

    if (overalSeconds < 10) {
        console.log(`${overalMinutes}:0${overalSeconds}`); // Поставям 0-ла ако се налага
    } else {
        console.log(`${overalMinutes}:${overalSeconds}`);
    }
}


sumSeconds(["15", "15", "24"]);