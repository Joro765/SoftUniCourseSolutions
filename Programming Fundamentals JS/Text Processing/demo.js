let text = "Georgi GeorGiev GeorGiev";
let counter = 0;

while (text.includes("G")) {
    text = text.replace("G", "g");
    counter++;
}


console.log(text);
console.log(counter);