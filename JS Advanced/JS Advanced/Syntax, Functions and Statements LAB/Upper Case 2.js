function upperCase(text) {
    let buff = "";
    let res = [];

    for (let i = 0; i < text.length; i++) {
        let chCode = text.charCodeAt(i);

        if ((chCode >= 65 && chCode <= 90) || (chCode >= 97 && chCode <= 122)) {
            buff += text[i];
        } else {
            res.push(buff);
            buff = "";
        }
    }

    if (buff) {
        res.push(buff);
    }

    console.log(res.join(", "));
}


upperCase("Hi, how are you?");