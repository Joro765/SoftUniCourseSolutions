function loadingBar(num) {

    let progress = ""

    for (let index = 0; index < num; index += 10) {
        progress += `%`;
    }

    for (let index = num / 10; index < 10; index++) {
        progress += `.`;
    }

    if (num < 100) {
        console.log(`${num}% [${progress}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
    }
}

loadingBar(90)