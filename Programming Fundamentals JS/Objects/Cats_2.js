function cats(data) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    for (const catInfo of data) {
        let [name, age] = catInfo.split(" ");
        let cat = new Cat(name, age);
        cat.meow();

    }

}


cats(['Mellow 2', 'Tom 5'])