function addAndSubstract(arr) {

    let sumOriginal = 0;
    let sumModified = 0;

    for (let i = 0; i < arr.length; i++) {
        let index = i;
        let current = arr[i];
        sumOriginal += arr[i];

        if (arr[i] % 2 === 0) {
            arr[i] += index;
        } else {
            arr[i] -= index;
        }

        sumModified += arr[i];

    }

    console.log(arr);
    console.log(sumOriginal);
    console.log(sumModified);

}


addAndSubstract([5, 15, 23, 56, 35])