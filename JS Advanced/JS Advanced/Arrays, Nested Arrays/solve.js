let numbers = [2, 6, 10, 3, 5, 7, 22, 31, 32, 33, 40, 17, 0];

if (numbers.some(n => n > 30)) { // Проверява дали има поне един елемент в масива, който отговаря на условието
    let el = numbers.find(n => n > 30); // Намира първия елемент в масива, който отговаря на условието
    let indexOfEl = numbers.indexOf(el);
    numbers.splice(indexOfEl, 1);

} else {
    console.log("There isn't an element bigger than 30");
}


console.log(numbers);


// Само четни числа с филтър
let result = numbers.filter(x => x % 2 === 0);
console.log(result);



// Трие първия елемент над 30 който намери в масива !!!

