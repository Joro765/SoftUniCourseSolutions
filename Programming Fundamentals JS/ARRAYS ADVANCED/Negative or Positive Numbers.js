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

    for (let num of result) {
        console.log(num);
    }

}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])