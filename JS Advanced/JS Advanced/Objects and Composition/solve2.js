let cat = {
    name: "Maya",
    age: 7,

    sayHello: function () {
        console.log(`${this.name} -> Meow!`);
    }
}

let func = cat.sayHello;

func();

cat.sayHello();