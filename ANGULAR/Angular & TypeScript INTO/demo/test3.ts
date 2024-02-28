type Employee = {
    id: number,
    name: string;
    greet: () => void;
}


let employee: Employee = {
    id: 1,
    name: "Joro",
    greet: () => {
        console.log(`${employee.name} says Hello :)`);

    }
}


let employee2: Employee = {
    id: 2,
    name: "Vasi",
    greet: () => {
        console.log(`${employee2.name} says Hello :)`);

    }
}




employee.greet();
employee2.greet();
employee.greet();
