(function solve() {
    String.prototype.ensureStart = function ensureStart(str) {
        if (this.startsWith(str)) {
            return this.toString()
        } else {
            return str + "" + this
        }
    }

    String.prototype.ensureEnd = function ensureEnd(str) {
        if (this.endsWith(str)) {
            return this.toString()
        } else {
            return this + "" + str
        }
    }

    String.prototype.isEmpty = function () {
        if (this.length < 1) {
            return true;
        } else {
            return false;
        }
    }



    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n)
        }

        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(" ")) {
            let words = this.split(" ");
            let res = [];

            for (const word of words) {
                if (res.join(" ").length + word.length + 3 <= n) {
                    res.push(word)
                } else {
                    break;
                }
            }
            return res.join(" ") + "...";
        }
        return this.slice(0, n - 3) + "...";

    }




    String.format = function format(string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
        return string

    }


})()

let str = "hello";

console.log(str.truncate(2));