function equalArrays(arr1, arr2) {

    let sum = 0;
    let isEqual = true;

    for (let i = 0; i < arr1.length; i++) {
        let firstArray = Number(arr1[i]);
        let secondArray = Number(arr2[i]);
        sum += firstArray;

        if (firstArray !== secondArray) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }

    if (isEqual === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'],
    ['10', '20', '30'])