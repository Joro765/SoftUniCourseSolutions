class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Когато методът е статичен, може да го викаме през класа, а не през истанцията. Работи като библиотека
    static distance(p1, p2) {
        const distX = p1.x - p2.x;
        const distY = p1.y - p2.y;
        return Math.sqrt(distX ** 2 + distY ** 2);
    }
}

// Създаваме си 2 инстанции на класа
let point1 = new Point(0, 0);
let point2 = new Point(3, 4);

// Викаме метода на класа с 2те инстанции, може да се вика и с нормален обект, който не е от клас POINT!!!
console.log(Point.distance(point1, point2));