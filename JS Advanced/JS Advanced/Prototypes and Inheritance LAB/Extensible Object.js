function extensibleObject() {
    let parentObj = {}; // Prototype of childOBJ

    let childObj = Object.create(parentObj); // Наследява прототипа на ParentOBJ

    // Закачаме функция, която приема обект на childOBJ
    childObj.extend = function (obj) {
        // Взимаме ключ - стойност двойките от подадения обект 
        let objAsArray = Object.entries(obj);
        // Ако е пропърти го закачаме на childOBJ ако е функция го закачаме на прототипа му ParentOBJ
        for (let [key, value] of objAsArray) {
            if (typeof value === "function") {
                parentObj[key] = value;
            } else {
                childObj[key] = value;
            }
        }
    }

    return childObj;
}


const myObj = extensibleObject();

const template = {

    extensionMethod: function () { },
    extensionProperty: 'someString'

}

myObj.extend(template);