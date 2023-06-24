function employeeList(data) {
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    let employeeArray = [];

    for (let i = 0; i < data.length; i++) {
        let number = data[i].length;
        let name = data[i];

        let employee = new Employee(name, number);
        employeeArray.push(employee);
    }


    for (const employee of employeeArray) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }

}


employeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])