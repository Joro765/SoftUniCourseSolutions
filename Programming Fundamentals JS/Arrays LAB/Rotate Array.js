function rotateArray(arr) {

    let rotations = Number(arr[arr.length - 1]);
    arr.pop();

    for (let index = 0; index < rotations; index++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(" "));

}

rotateArray(['1', '2', '3', '4', '2'])