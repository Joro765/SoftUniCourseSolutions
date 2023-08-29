function solve(...params) { // Тук реално се подават 6 параметъра, но за да не ги пиша един по един и после да ги добавям в масив, ползвам ...params

    // ...params - прави масив от всички параметри без значение колко са. Ползва се ако не знаем колко параметри ще бъдат подадени

    let number = Number(params.shift())
    let task = params.shift();

    while (task) {
        switch (task) {
            case "chop":
                number = number / 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number += 1;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number = number - (number * 0.2);
                console.log(number);
                break;
        }
        task = params.shift();
    }

}


solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')