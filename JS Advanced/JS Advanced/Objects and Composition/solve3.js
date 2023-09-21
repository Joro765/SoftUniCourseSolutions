function print() {
    console.log(`${this.name} is printing a page.`);
}

function scan() {
    console.log(`${this.name} is scanning a page`);
}

let printer = {
    name: "ASCA Printer",
    print
}

let scanner = {
    name: "ECMA Scanner",
    scan
}

let copier = {
    name: "ONE Copier",
    print,
    scan
}


// Можем да закачаме външни функции на обекти спрямо какви действия могат да изпъляват (ролята им)

printer.print();
scanner.scan();
copier.print();
copier.scan();