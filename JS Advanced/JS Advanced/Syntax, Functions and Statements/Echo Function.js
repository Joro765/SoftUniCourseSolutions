function echoFunctions(input) {

    let text = input;
    let textLength = text.length;

    let arr = [];

    arr.push(textLength);
    arr.push(text);


    for (let element of arr) {
        console.log(element);
    }
}


echoFunctions('Hello, JavaScript!');