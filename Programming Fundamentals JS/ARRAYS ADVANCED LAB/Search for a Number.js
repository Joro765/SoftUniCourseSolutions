function searchNumber(numbers, data) {

    let resultArr = numbers.splice(0, data[0]); // Takes the needed elements. Command 1

    resultArr.splice(0, data[1]); // Deletes the elements. Command 2

    let counter = 0;

    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] === data[2]) {
            counter++;
        }
    }

    // Another way with Filter !!!
    // Adds the number to numberCounter Array as many times as it finds it and then take the length of the array.
    // If found 2 times it will add it 2 times and the length will also be 2
    // let numberCounter = resultArr.filter(el => el === data[2]).length(); 


    console.log(`Number ${data[2]} occurs ${counter} times.`);
}

searchNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])