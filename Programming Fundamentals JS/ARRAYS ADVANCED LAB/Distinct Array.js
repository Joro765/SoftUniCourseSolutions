function distinctArray(numbers) {

    let uniqueArr = [];

    for (let number of numbers) {
        if (!uniqueArr.includes(number)) {
            uniqueArr.push(number);
        }
    }

    console.log(uniqueArr.join(' '));
}

distinctArray([1, 1, 2, 2, 3, 7, 3, 5, 1, 5])
