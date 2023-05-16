function convertUSD(input) {
    let usdRate = 1.79549;
    let dollars = Number(input[0]);
    let bgnResult = dollars * usdRate;
    console.log(bgnResult);
}

convertUSD(["22"])