function foodRobot() {
    // STORAGE
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    // RECIPES
    let recipeEnum = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }



    // ROBOT
    return function manager(command) {
        let tokens = command.split(" ");
        let task = tokens[0]

        switch (task) {
            case "restock":
                return restock(tokens[1], Number(tokens[2]));
                break;
            case "prepare": return prepare(tokens[1], Number(tokens[2])); break;
            case "report":
                return printStorage();
                break;
        }

    }

    // PREPARE FOOD FUNCTION
    function prepare(recipe, quantity) {
        let prepareRecipe = {}
        for (let [element, value] of Object.entries(recipeEnum[recipe])) {
            let neededQuantity = value * quantity;
            if (storage[element] < neededQuantity) {
                return `Error: not enough ${element} in stock`;
            }
            prepareRecipe[element] = neededQuantity;
        }

        for (let [element, value] of Object.entries(prepareRecipe)) {
            storage[element] -= value;
        }
        return "Success";
    }


    // PRINT FUNCTION
    function printStorage() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }


    // ADD FUNCTION
    function restock(microelement, quantity) {
        storage[microelement] += quantity;
        return "Success";
    }
}






let manager = foodRobot();

console.log(manager("restock flavour 50")); // Success

console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in


