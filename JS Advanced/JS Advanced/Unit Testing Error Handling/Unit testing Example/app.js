function sum(arr) {
    let result = 0;

    for (const element of arr) {
        result += element;
    }
    return result;
}

module.exports = { sum }

// Подавам функцията за ползване в друг файл