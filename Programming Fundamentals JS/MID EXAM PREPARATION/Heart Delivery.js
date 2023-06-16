function heartDelivery(data) {

    let arr = data[0].split("@");
    data.shift(arr);
    arr = arr.map(Number);
    let lastPosition;

    let index = 0;
    let command = data[0];
    let currentIndex = 0;

    while (command !== "Love!") {
        let tokens = command.split(" ");
        let jumpLength = Number(tokens[1]);


        if (tokens[0] === "Jump") {
            if (currentIndex + jumpLength < arr.length) {
                currentIndex = currentIndex + jumpLength;
            } else {
                currentIndex = 0;
            }

            if (arr[currentIndex] > 0) {
                arr[currentIndex] -= 2;
                if (arr[currentIndex] <= 0) {
                    console.log(`Place ${currentIndex} has Valentine's day.`);
                }
            } else {
                console.log(`Place ${currentIndex} already had Valentine's day.`);
            }
        }

        lastPosition = currentIndex;
        index++;
        command = data[index];
    }

    let sucessCounter = 0;
    let failCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            sucessCounter++;
        } else {
            failCounter++;
        }
    }

    console.log(`Cupid's last position was ${lastPosition}.`);
    if (sucessCounter === arr.length) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${failCounter} places.`)
    }

}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])