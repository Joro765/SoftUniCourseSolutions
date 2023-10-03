function solution() {
    let result = "";

    return {
        append(text) {
            result += text;
        },
        removeStart(n) {
            result = result.substring(n);
        },
        removeEnd(n) {
            result = result.substring(0, result.length - n)
        },
        print() {
            console.log(result);
        }
    }



}


// Създаваме фукция, която инициализира текст и връща обект с методи, които после се извикват като команди

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();