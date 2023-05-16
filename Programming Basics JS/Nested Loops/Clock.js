function clock() {

    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            if (m < 10) {
                console.log(`${h}:0${m}`);
            } else {
                console.log(`${h}:${m}`);
            }
        }
    }
}

clock();