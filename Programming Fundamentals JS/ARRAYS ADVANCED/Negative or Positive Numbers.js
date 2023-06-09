function negativeOrPositiveNumbers(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);

        if (currentElement < 0) {
            result.unshift(currentElement);
        } else {
            result.push(currentElement);
        }
    }

    console.log(result.join("\n"));

}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])