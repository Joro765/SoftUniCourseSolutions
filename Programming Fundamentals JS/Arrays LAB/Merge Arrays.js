function mergeArrays(arr1, arr2) {

    let resultArray = [];

    for (let index = 0; index < arr1.length; index++) {
        let current1 = arr1[index];
        let current2 = arr2[index];

        if (index % 2 === 0) {
            let sum = Number(current1) + Number(current2);
            resultArray.push(sum);
        } else {
            let sum2 = current1 + "" + current2;
            resultArray.push(sum2);
        }
    }


    console.log(resultArray.join(" - "));

}


mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])