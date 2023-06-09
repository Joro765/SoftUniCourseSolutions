function sumFirstLast(arr) {

    let first = Number(arr.shift());
    let last = Number(arr.pop());

    let sum = first + last;
    console.log(sum);

}

sumFirstLast(['20', '30', '40'])