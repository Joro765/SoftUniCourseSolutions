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

    }

    String.format = function format() {

    }


})()

let str = "hello";

