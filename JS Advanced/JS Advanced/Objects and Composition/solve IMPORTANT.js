let phoneBook = {};

phoneBook["Georgi"] = "08889988343";
phoneBook["Vasilena"] = "04353355535";
phoneBook["Pavlin"] = "5445552225533";
phoneBook["Petya"] = "98854226677223";


// Sorted object

let sorted = Object.entries(phoneBook).sort((a, b) => a[0].localeCompare(b[0]));


for (const key in sorted) {
    let [name, value] = sorted[key];

    console.log(`${name} -> ${value}`);
}




// Превръщане на сортираният масив обратно в обект. След като сортирам обект той става на масив -> мога да го превърна по този начин отново в обект.
// let sortedObj = {};


// for (let pair of sorted) {
//     let key = pair[0];
//     let value = pair[1];

//     sortedObj[key] = value;

// }


// console.log(sortedObj);