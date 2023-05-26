function reverseArray(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let currentElement = arr[i];
        let nextElement = arr[arr.length - 1 - i];

        arr[i] = nextElement;
        arr[arr.length - 1 - i] = currentElement;

    }

    console.log(arr.join(" "));

}

reverseArray(['a', 'b', 'c', 'd', 'e'])