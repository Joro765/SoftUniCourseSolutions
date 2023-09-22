function solve(data) {

    let resultArray = [];
    let columnNames = data.shift(); // Това го махаме не ни трябва


    for (let line of data) {
        let [town, latitude, longitude] = line.split(" |"); // Сплитваме като така ще остане един пайп в началото на първи елемент

        town = town.substring(2).trim(); // махаме пайпа от началото на първи елемент и тримваме спейсове
        latitude = latitude.trim();
        longitude = longitude.trim();
        latitude = Number(latitude).toFixed(2); // Като фикснем до 2 знака отново става стринг затова после в обекта пак го правя число
        longitude = Number(longitude).toFixed(2);

        // Правим обект на всяка итерация и го пушваме в масива по-долу
        let obj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }

        resultArray.push(obj);

    }


    return JSON.stringify(resultArray)

}



solve(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.43343 | 116.363625 |'])