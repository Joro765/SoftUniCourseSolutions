function numbersSequenceK(n, k) {

    let arr = [1];

    while (n > arr.length) {
        let kArray = arr.slice(- k);
        let sum = 0;
        for (let i = 0; i < kArray.length; i++) {
            sum += kArray[i];
        }
        arr.push(sum);
    }

    console.log(arr.join(" "));

}


numbersSequenceK(6, 3)