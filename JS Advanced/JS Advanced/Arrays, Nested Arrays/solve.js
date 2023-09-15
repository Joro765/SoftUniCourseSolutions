let arr = [1, 2, 3, 4, 5];

let buff = "";

while (arr.length > 0) {
    buff += `${arr.pop()} `
}

console.log(buff.trim());