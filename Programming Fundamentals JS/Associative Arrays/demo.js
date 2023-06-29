let arr = {};

arr.one = 1;
arr.two = 2;
arr.three = 3;
arr.four = 4;
arr.five = 5;



// FOR IN - LOOP OBJECT
for (let key in arr) {
    console.log(`${key} -> ${arr[key]}`);
}


// FOR OF LOOP OBJECT - using only key
for (const key of Object.keys(arr)) {
    console.log(`${key} -> ${arr[key]}`);
}


// FOR OF LOOP OBJECT - using array of (key - value)
for (const [key, value] of Object.entries(arr)) {
    console.log(`${key} -> ${value}`);
}