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



// Push objects into an array and then check if any object has a property "weight" and print the objects name
let objA = {
    name: "Joro",
    age: 27,
    weight: 72
}

let objB = {
    name: "Ivan",
    age: 32
}

let objC = {
    name: "Ivo",
    age: 40
}

let list = [];

list.push(objA, objB, objC);

let property = "weight";

for (const obj of list) {
    if (obj.hasOwnProperty(property)) {
        console.log(obj.name);
    } else {
        console.log("NOPE");
    }

}