function squareOfStars(input) {


    if (input) {
        for (let i = 0; i < input; i++) {
            let buff = ""
            for (let x = 0; x < input; x++) {
                buff += "* ";
            }
            console.log(buff);
        }
    } else {
        for (let i = 0; i < 5; i++) {
            let buff = ""
            for (let x = 0; x < 5; x++) {
                buff += "* ";
            }
            console.log(buff);
        }
    }

}


squareOfStars(2);