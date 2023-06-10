function muOnline(data) {

    let arr = data.split("|")

    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let monster;

    for (let i = 0; i < arr.length; i++) {
        let mission = arr[i].split(" ");
        let command = mission[0];
        let points = Number(mission[1]);
    }

}


muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")