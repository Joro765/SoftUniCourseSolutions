function cutReverse(text) {



    // Split the text into 2 texts
    let text1 = text.substring(0, text.length / 2);
    let text2 = text.substring(text.length / 2, text.length);

    let text1Array = text1.split("");
    let text1Reverse = text1Array.reverse();
    let result1 = text1Reverse.join("");

    let text2Array = text2.split("");
    let text2Reverse = text2Array.reverse();
    let result2 = text2Reverse.join("");


    console.log(result1);
    console.log(result2);

}


cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')