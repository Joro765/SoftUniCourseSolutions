function getFibonator() {
    let starting = 0;
    let current = 1

    return function () {
        let fibNumber = starting + current;
        starting = current;
        current = fibNumber;
        return starting
    }

}

let fib = getFibonator();
console.log(fib()); //1
console.log(fib()); //1
console.log(fib()); //2
console.log(fib()); //3
console.log(fib()); //5
console.log(fib()); //8


// Прави се с вложена функция, защото извикваме само веднъж горната функция и тя започва да пази стейта на променливите за 
// всяко следващо извикване на вложената функция. Това позволява на резултатът да се натрупва