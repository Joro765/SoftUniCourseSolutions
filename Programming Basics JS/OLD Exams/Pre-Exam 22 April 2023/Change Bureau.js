function change(input) {
    let bitcoin = Number(input[0]);
    let chinese = Number(input[1]);
    let commision = Number(input[2]);

    let leva = 0;
    leva += bitcoin * 1168;
    leva += (chinese * 0.15) * 1.76;
    let euro = leva / 1.95;

    euro = euro - (euro * commision) / 100;




    console.log(euro.toFixed(2));
}


change(["1",
    "5",
    "5"])

