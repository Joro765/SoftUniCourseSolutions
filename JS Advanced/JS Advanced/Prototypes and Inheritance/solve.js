let cat = {
    name: "Sharo",
    age: 5,

    set age(value) {
        if (typeof value !== "number" || value < 1) {
            throw new Error("Invalid age!")
        }
        this._age = value
    },

    get age() {
        return this._age
    }
}



cat.age = 20;

console.log(cat.age);