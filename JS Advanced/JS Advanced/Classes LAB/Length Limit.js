class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;

    }

    increase(value) {
        this.innerLength += value;

    }

    decrease(value) {
        if (this.innerLength - value < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= value;
        }
    }

    toString() {
        let buff;
        if (this.innerLength == 0) {
            return "...";
        } else if (this.innerLength > this.innerString.length) {
            return this.innerString;
        } else {
            buff = this.innerString.slice(0, this.innerLength);
            return buff + "..."
        }

    }
}


let test = new Stringer("Viktor", 6);

test.decrease(3);

console.log(test.toString()); // Te...