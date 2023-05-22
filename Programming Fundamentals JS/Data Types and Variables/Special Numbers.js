function specialNumbers(num) {

    for (let i = 1; i <= num.toString(); i++) {
        let numText = i.toString();
        let sum = 0;
        let isSpecial = "False";
        for (let x = 0; x < numText.length; x++) {
            sum += Number(numText[x]);


            if (sum === 5 || sum === 7 || sum === 11) {
                isSpecial = "True";
            }
        }
        console.log(`${i} -> ${isSpecial}`);
    }

}
specialNumbers(65)