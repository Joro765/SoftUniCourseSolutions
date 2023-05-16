function salary(input) {
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);


    for (i = 2; i <= input.length; i++) {
        if (input[i] === "Facebook") {
            salary -= 150;
        }

        if (input[i] === "Instagram") {
            salary -= 100;
        }

        if (input[i] === "Reddit") {
            salary -= 50;
        }
    }

    if (salary > 0) {
        console.log(salary);
    } else {
        console.log("You have lost your salary.");
    }

}




salary(["10",

    "750",

    "Facebook",

    "Dev.bg",

    "Instagram",

    "Facebook",

    "Reddit",

    "Facebook",

    "Facebook"])