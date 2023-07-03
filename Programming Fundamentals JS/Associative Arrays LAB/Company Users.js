function companyUsers(input) {

    // Създаваме обект в който ще държим обекти
    let obj = {};



    for (const data of input) {
        let [company, employee] = data.split(" -> ");

        // Проверяваме дали компанията вече е в обекта
        if (!obj.hasOwnProperty(company)) {
            obj[company] = []; // Създаваме ключ с име и стойност масив
            obj[company].push(employee); // Добавяме към масива на ключа
        } else {
            if (!obj[company].includes(employee)) {  // Проверяваме масива на даден ключ
                obj[company].push(employee);  // Добавяме към масива на ключа
            }
        }
    }

    // Сортировка по ключ
    let sortedArray = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));


    // Print
    for (const company of sortedArray) {
        console.log(company[0]); // Print company name
        company[1].forEach(element => console.log(`-- ${element}`)); // Print elements of array for each company
    }

}


companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'
])