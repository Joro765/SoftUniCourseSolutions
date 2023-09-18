function solve(arr) {

    let resultArray = [];

    for (let el of arr) {

        if (el >= 0) {
            resultArray.push(el);
        } else {
            resultArray.unshift(el);
        }

    }


    console.log(resultArray);

}

solve([3, -2, 0, -1])