function aggregateElements(input) {

    let sum = 0;
    let sum2 = 0;
    let result = "";


    for (let num of input) {
        sum += num;
        sum2 += 1 / num;
        result += num;
    }

    console.log(sum);
    console.log(sum2);
    console.log(result);


}


aggregateElements([1, 2, 3])