function solve(arr) {


    let sortedArray = arr.sort((a, b) => a - b);

    let resultArray = [];

    while (sortedArray.length > 0) {
        let biggest = sortedArray.pop();
        let smallest = sortedArray.shift();

        resultArray.push(smallest);
        resultArray.push(biggest);

    }

    return resultArray

}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])