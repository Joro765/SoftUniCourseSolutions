function commonElements(arr1, arr2) {


    for (let x = 0; x < arr1.length; x++) {
        let currentElement1 = arr1[x];
        for (let y = 0; y < arr2.length; y++) {
            let currentElement2 = arr2[y];

            if (currentElement1 === currentElement2) {
                console.log(currentElement1);
            }
        }
    }
}


commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])