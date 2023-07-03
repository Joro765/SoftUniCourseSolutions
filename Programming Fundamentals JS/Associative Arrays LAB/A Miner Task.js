function minertask(data) {

    let obj = {};

    for (let i = 0; i < data.length; i += 2) {
        let resource = data[i];
        let amount = Number(data[i + 1]);


        if (obj.hasOwnProperty(resource)) {
            obj[resource] += amount;
        } else {
            obj[resource] = amount;
        }
    }





    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }



}


minertask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])