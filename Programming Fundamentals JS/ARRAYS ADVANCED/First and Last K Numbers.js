function firstAndLastK(arr) {

    let elCount = arr.shift()

    let firstArray = arr.slice(0, elCount);
    let secondArray = arr.slice(-elCount);

    console.log(firstArray.join(" "));
    console.log(secondArray.join(" "));


}

firstAndLastK([3, 6, 7, 8, 9])