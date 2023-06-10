function smallestNumbers(arr) {

    arr.sort((a, b) => a - b);

    let smallestNums = arr.slice(0, 2);

    console.log(smallestNums.join(" "));


}

smallestNumbers([30, 15, 50, 5])