function convert(firstName, lastName, hairColor) {

    let obj = {}

    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;

    let json = JSON.stringify(obj);

    console.log(json);

}


convert('George', 'Jones',
    'Brown')