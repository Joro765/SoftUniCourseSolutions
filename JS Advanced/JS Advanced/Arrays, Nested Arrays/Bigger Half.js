function solve(arr) {

    // Sorted Array
    arr.sort((a, b) => a - b);
    let newArray;

    if (arr.length % 2 === 0) {
        newArray = arr.slice(arr.length / 2);
    } else {
        newArray = arr.slice(arr.length / 2);
    }


    return newArray;


}


solve([3, 19, 14, 7, 2, 19, 6])