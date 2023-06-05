function documents(firstName, lastName, age, salary, town) {
    // Invoke external function
    printInfo(firstName, lastName);
    console.log(`${age} years old. City: ${town}`);
    // Invoke external function
    printIncome(salary);

}

// External Function
function printInfo(value1, value2) {
    console.log(`${value1} ${value2}`);
}

// External Function
function printIncome(x) {
    console.log(`Income: ${x}`);
}


// Invoke Main function
documents("Georgi", "Georgiev", 27, 30000, "Stara Zagora")


