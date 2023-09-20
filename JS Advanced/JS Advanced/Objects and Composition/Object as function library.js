const helper = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
}

let numbers = [5, 12, 1, 33, 2, 0, 18, 12, 7];

let sortedNumbers = numbers.sort(helper.descending)


console.log(sortedNumbers);

// Обект само с функции, които може да си ползваме като нашо library