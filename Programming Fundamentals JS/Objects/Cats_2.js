function cats(data) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    let catsArray = [];

    for (const catInfo of data) {
        let [name, age] = catInfo.split(" ");
        let cat = new Cat(name, age);
        catsArray.push(cat);

    }

    for (const cat of catsArray) {
        console.log(cat.meow());

    }

}


cats(['Mellow 2', 'Tom 5'])