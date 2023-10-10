class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(element)
        this.collection.sort((a, b) => a - b)
        this.size = this.collection.length;
    }

    remove(index) {
        if ((index < 0) || (index > this.collection.length - 1)) {
            throw new Error("ERROR")
        } else {
            this.collection.splice(index, 1);
            this.collection.sort((a, b) => a - b)
            this.size = this.collection.length;
        }
    }

    get(index) {
        if ((index < 0) || (index > this.collection.length - 1)) {
            throw new Error("ERROR")
        } else {
            return this.collection[index]
        }
    }
}


let myList = new List();
myList.add(3)
myList.add(2)
myList.add(1)
myList.add(1)
myList.add(1)
myList.add(1)
myList.add(1)
console.log(myList);
