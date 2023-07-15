// Текст в който ще търсим
let text = `I am born on 30-Dec-1994.
My father is born on the 9-Jul-1955.
01-July-2000 is valid123@email.bg not a jorogeorgiev765@gmail.com valid valid123@email2.bg 
valid123\$email.bg date.
123valid@abv.bg`;

// Регекс с който ще търсим
let pattern = /[a-zA-Z]+[0-9]*[a-zA-Z0-9_]*@[a-z]+\.[a-z]+/gm;


// Два начина за търсене

//let match = pattern.exec(text); Ще вади запис и инфо за него
//console.log(match);


let match2 = text.match(pattern); // Вади всички записи в масив без допълнително инфо
console.log(match2);
console.log(pattern.test(text));