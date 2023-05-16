function basketball(input) {
    let membershipPrice = Number(input[0]);

    let shoesPrice = membershipPrice - (membershipPrice * (40 / 100));
    let clothesPrice = shoesPrice - (shoesPrice * (20 / 100));
    let ballPrice = clothesPrice / 4;
    let accessoriesPrice = ballPrice / 5;
    let sum = membershipPrice + shoesPrice + clothesPrice + ballPrice + accessoriesPrice;

    console.log(sum);
}

basketball(["365"]);