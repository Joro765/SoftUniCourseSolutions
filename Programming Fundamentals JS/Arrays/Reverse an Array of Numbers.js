function reverseArray(n, data) {

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(data[i]);
    }

    let reverseArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i])
    }


    console.log(reverseArr.join(" "));

}

reverseArray(3, [10, 20, 30, 40, 50])