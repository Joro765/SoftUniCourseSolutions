function addAndSubstract(arr) {

    let sumOriginal = 0;
    let sumModified = 0;
    let arrayLength = arr.length;

    for (let index = 0; index < arrayLength; index++) {
        let current = arr[index];
        sumOriginal += current;

        if (current % 2 === 0) {
            current += index;
        } else {
            current -= index;
        }

        arr[index] = current;
        sumModified += current;

    }

    console.log(arr);
    console.log(sumOriginal);
    console.log(sumModified);

}


addAndSubstract([5, 15, 23, 56, 35])