function reverse(text) {

    let splitString = text.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");
    console.log(joinArray);


}

reverse("Hello")