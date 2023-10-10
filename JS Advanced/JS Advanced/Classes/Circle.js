class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(value) {
        return this.radius = value / 2;
    }

    get diameter() {
        return this.diameter = this.radius * 2;
    }

    get area() {
        return (Math.PI * this.radius * this.radius);
    }
}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

c.diameter = 2;

console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);