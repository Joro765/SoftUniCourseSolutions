function triangle(num) {
    let result = "";

    for (let i = 1; i <= num; i++) {
        for (let x = 1; x <= i; x++) {
            result += `${i} `;
        }
        console.log(result);
        result = "";
    }


}

triangle(6);