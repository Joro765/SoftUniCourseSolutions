function calculateArea(input) {
    let figure = input[0];

    if (figure === "square") {
        let length = Number(input[1]);
        let squareArea = length * length;
        console.log(squareArea.toFixed(3));
    } else if (figure === "rectangle") {
        let rectangleLengthA = Number(input[1]);
        let rectangleLengthB = Number(input[2]);
        let rectangleArea = rectangleLengthA * rectangleLengthB;
        console.log(rectangleArea.toFixed(3));
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        let circleArea = Math.PI * (radius * radius);
        console.log(circleArea.toFixed(3));
    } else if (figure === "triangle") {
        let side = Number(input[1]);
        let h = Number(input[2]);
        let triangleArea = (side * h) / 2;
        console.log(triangleArea.toFixed(3));
    } else {
        console.log("Wrong Figure!")
    }


}

calculateArea(["triangle", "4.5", "20"]);