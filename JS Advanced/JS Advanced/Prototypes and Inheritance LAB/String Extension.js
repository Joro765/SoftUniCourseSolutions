(function solve() {
    String.prototype.ensureStart = function ensureStart(str) {
        if (this.startsWith(str)) {
            return this
        } else {
            return str + " " + this
        }
    }

    String.prototype.ensureEnd = function ensureEnd(str) {
        if (this.endsWith(str)) {
            return this
        } else {
            return this + " " + str
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
        if (this.length < n) {
            return this
        } else {
            if (this.includes(" ")) {

            } else {
                return this.substring(this.length - (n - 3)) + "..."
            }
        }
    }

    String.format = function format() {

    }


})()

let str = "hello";

console.log(str.truncate(4));
