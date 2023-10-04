function solve(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Argument must be an array!") // Throw an error if argument isn't an array
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number') {
            throw new Error("Array must contain only numbers!") // Throw an error if element of the array is not a number
        }
    }



    let sum = 0;

    for (const el of arr) {
        sum += el;
    }

    return sum
}


console.log(solve([1, 2, '3']))