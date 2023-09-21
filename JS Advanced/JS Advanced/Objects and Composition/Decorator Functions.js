// Функция, която приема обект и му закача функция като пропърти
function canPrint(device) {
    // Закача функция print към подаден като параметър обект
    device.print = function () {
        console.log(`${device.name} is printing a page...`);
    }
}

// Създаваме обект
const printer = {
    name: "ACME Printer"
}


// Извикваме функцията с обекта за да му закачим функция print
canPrint(printer);

// Извикваме функцията след като сме я закачили към обекта
printer.print()