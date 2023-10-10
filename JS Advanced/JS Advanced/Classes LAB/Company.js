class Company {
    departmentSalary = {};
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (name == "" || name == undefined || name == null) {
            throw new Error("Invalid input!");
        }
        if (salary == "" || salary == undefined || salary == null || salary < 0) {
            throw new Error("Invalid input!");
        }
        if (position == "" || position == undefined || position == null) {
            throw new Error("Invalid input!");
        }
        if (department == "" || department == undefined || department == null) {
            throw new Error("Invalid input!");
        }


        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            this.departmentSalary[department] = 0;
        }

        let employee = { name, salary, position };
        this.departmentSalary[department] += Number(salary);
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`

    }

    bestDepartment() {
        for (let [key, value] of Object.entries(this.departments)) {
            let employeeCount = value.length;
            this.departmentSalary[key] /= employeeCount;
        }
        let sortedAverageSalary = Object.entries(this.departmentSalary).sort((a, b) => b[1] - a[1]);
        let bestAverageSalaryDepartment = sortedAverageSalary[0][0]; // best department
        let bestAverageSalaryNumber = sortedAverageSalary[0][1];

        let buff = ``;
        buff += `Best Department is: ${bestAverageSalaryDepartment}\n`;
        buff += `Average salary: ${(bestAverageSalaryNumber).toFixed(2)}\n`;

        let sortedDepartment = this.departments[bestAverageSalaryDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))

        for (let person of sortedDepartment) {
            buff += `${person.name} ${person.salary} ${person.position}\n`;

        }
        return buff.trim()

    }

}

let c = new Company();



c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment())