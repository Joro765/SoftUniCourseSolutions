function solve(arr, ratations) {

    for (let i = 0; i < ratations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement)
    }

    console.log(arr.join(" "));

}

solve(['1',

    '2',

    '3',

    '4'],

    2)