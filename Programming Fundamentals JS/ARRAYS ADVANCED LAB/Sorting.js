function sorting(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];
    let arrLength = sortedArr.length

    for (let i = 0; i < arrLength / 2; i++) {
        let biggest = sortedArr.pop();
        let smallest = sortedArr.shift();

        newArr.push(biggest, smallest);
    }

    console.log(newArr.join(" "));
}


sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])