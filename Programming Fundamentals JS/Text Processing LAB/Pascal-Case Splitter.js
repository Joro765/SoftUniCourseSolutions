function pascalSplitter(text) {

    let text2 = text.toLowerCase();

    result = "";

    for (i = 0; i < text.length; i++) {
        if (text[i] === text2[i]) {
            result += text[i]
        } else {
            result += " " + text[i]
        }
    }


    console.log(result.trim().split(" ").join(", "));




}



pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')