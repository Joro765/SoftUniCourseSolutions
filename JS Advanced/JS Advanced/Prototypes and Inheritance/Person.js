function createPerson(firstName, lastName) {

    return {
        firstName,
        lastName,

        set fullName(value) {
            let parts = value.split(" ");
            if (parts.length == 2) {
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        },

        get fullName() {
            return this.firstName + " " + this.lastName
        }


    }
}



let person = createPerson("Peter", "Ivanov");
person.firstName = "Joro";
person.lastName = "Georgiev";
console.log(person.fullName);
person.fullName = "Vasilena Markova";
console.log(person.fullName);
