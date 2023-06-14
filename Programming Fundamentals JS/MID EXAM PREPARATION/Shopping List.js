function shoppingList(data) {
    let list = data[0].split("!"); // Взимаме си първи елемент и го правим на масив

    let index = 1;

    let command = data[index]; // взимаме втори елемент от масива по който ще въртим цикъла

    while (command !== "Go Shopping!") {
        command = data[index].split(" "); // правим първия елемент на масив
        let event = command[0];  // взимаме си командата 
        let product = command[1]; // взимаме си продуктите
        let product2 = command[2];

        switch (event) {
            case "Urgent":  // добавяне
                if (list.includes(product)) {
                    break;
                } else {
                    list.unshift(product);
                }
                break;
            case "Unnecessary": // триене
                if (list.includes(product)) {
                    let i = list.indexOf(product);
                    list.splice(i, 1);
                } else {
                    break;
                }

                break;
            case "Correct": // коригиране
                if (list.includes(product)) {
                    let i = list.indexOf(product);
                    list.splice(i, 1, product2);
                } else {
                    break;
                } break;
            case "Rearrange": // преместване
                if (list.includes(product)) {
                    let i = list.indexOf(product);
                    let old = list.splice(i, 1);
                    list.push(old);
                } else {
                    break;
                } break;
        }


        index++;    // Взимаме следващ индекс
        command = data[index];  // Взимаме следващ елемент от масива
    }

    console.log(list.join(", "));




}

shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]))