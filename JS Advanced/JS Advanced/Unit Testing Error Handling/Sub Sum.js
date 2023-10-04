function solve(arr, startIndex, endIndex) {

    // Check if type is ARRAY
    if (!Array.isArray(arr)) {
        return NaN;
    }

    // Check if all elements are NUMBERS
    for (const element of arr) {
        if ((typeof element) !== "number") {
            return NaN;
        }
    }

    // CHECK start INDEX
    if (startIndex < 0) {
        startIndex = 0;
    }


    // CHECK end INDEX
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }



    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += arr[i];
    }

    return sum;

}


console.log(solve([10, 'twenty', 30, 40], 0, 2))