function phoneBook(data) {

    let arr = {};

    for (const info of data) {
        let [name, number] = info.split(" ");
        if (arr.hasOwnProperty(name) === name) {
            arr[name] = number
        } else {
            arr[name] = number;
        }
    }

    for (const key in arr) {
        console.log(`${key} -> ${arr[key]}`);
    }

}


phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])