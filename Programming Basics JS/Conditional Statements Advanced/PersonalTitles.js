function personalTitles(input) {
    let age = Number(input[0]);
    let sex = input[1].toLowerCase();


    if (sex === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }

    }
}

personalTitles(["12", "f"]);