function storage(data) {

    let store = new Map();


    for (const info of data) {
        let [product, amount] = info.split(" ");

        if (store.has(product)) {
            store.set(product, Number(store.get(product)) + Number(amount))
        } else {
            store.set(product, amount);
        }
    }

    for (const [key, value] of store) {
        console.log(`${key} -> ${value}`);
    }
}


storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])