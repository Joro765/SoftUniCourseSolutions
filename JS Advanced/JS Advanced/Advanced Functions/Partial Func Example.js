// Разделяне на функцията за да може да получава параметрите на 2 пъти или повече
function sum(x, y, z) {
    return function (z) {
        return x + y + z;
    }
}


let partialResult = sum(2, 4); // Извиквам гората функция, която приема 2 от 3те параметъра

let result = partialResult(3); // Извиквам резултатът на тази функция и добавям 3тия параметър

console.log(result);