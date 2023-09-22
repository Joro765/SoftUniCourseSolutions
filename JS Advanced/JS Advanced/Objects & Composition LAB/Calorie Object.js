function solve(data) {
    let obj = {};

    for (let i = 0; i < data.length; i += 2) {
        let product = data[i];
        let calories = Number(data[i + 1]);

        obj[product] = calories;
    }


    console.log(obj);


}


solve(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52'])