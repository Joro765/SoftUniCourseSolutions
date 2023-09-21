// Функция, която създава обект rect с външо подадени параметри и функция, която пресмята лицето
function createRectangle(width, height) {
    let rect = { width, height };

    rect.getArea = function () {
        return rect.width * rect.height;
    }

    return rect;
}


// Създавам обект с помощта на функцията
let a = createRectangle(5, 5);
console.log(a.getArea());



// Създавам втори обект с помощта на функцията
let b = createRectangle(10, 10);
console.log(b.getArea());


