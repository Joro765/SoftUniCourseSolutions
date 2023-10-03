function solve(arr, type) {

    function sortArr(type) {
        return function (arr) {
            if (type === "asc") {
                return arr.sort((a, b) => a - b);
            } else {
                return arr.sort((a, b) => b - a);
            }
        }
    }

    let sortedArray = sortArr(type);
    let result = sortedArray(arr);

    return result



}



solve([14, 7, 17, 6, 8], 'asc')