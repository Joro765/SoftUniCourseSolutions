const obj = {
    a: 1,
    b: 2
}

Object.defineProperty(obj, "c", { value: 3, writable: false, enumerable: true, configurable: true });



console.log(obj);

obj.c = 10;

console.log(obj.c);