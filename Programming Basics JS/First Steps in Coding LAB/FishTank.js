function fishTank(input) {
    let дължина = Number(input[0]);
    let широчина = Number(input[1]);
    let височина = Number(input[2]);
    let otherStuff = Number(input[3]) / 100; // Процент

    let обемКуб = дължина * широчина * височина;
    let обемЛит = обемКуб / 1000;
    let заетОбем = обемЛит * otherStuff;
    let нужниЛитри = обемЛит - заетОбем
    console.log(нужниЛитри);
}


fishTank(["85", "75", "47", "17"]);

