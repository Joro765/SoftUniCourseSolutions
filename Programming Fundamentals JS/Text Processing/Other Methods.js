// Trim
let name = "  Joro  "
console.log(name.trim()); // Trim реже празни места отпред и отзад TrimStart само отпред TrimEnd - само отзад

// Starts with Ends with
let str = "And they lived happy after all";
console.log(str.startsWith("And"));
console.log(str.endsWith("all"));
console.log(str.startsWith("they", 4)); // Проверя от конкретен индекс нататък

// Pad - добавя нещо, докато не достъгне конкретен length
let text = "010";
console.log(text.padStart(8, "0")); // Добавя 0 докато не достигне дължина от 8 
let sentence = "He passed away"
console.log(sentence.padEnd(17, ".")); // Добавя . накрая докато не достигне дължина от 17