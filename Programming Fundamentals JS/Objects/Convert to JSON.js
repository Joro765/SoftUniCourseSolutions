function convertToJSON(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    }

    let toJSON = JSON.stringify(person);

    console.log(toJSON);


}

convertToJSON('George', 'Jones', 'Brown')