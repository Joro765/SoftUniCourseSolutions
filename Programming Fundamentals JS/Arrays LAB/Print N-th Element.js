function printElement(arr) {

    let step = Number(arr[arr.length - 1]);
    let resultArray = [];

    for (let index = 0; index < arr.length - 1; index = index + step) {
        resultArray.push(arr[index]);
    }

    console.log(resultArray.join(" "));


}

printElement(['5', '20', '31', '4', '20', '2'])