function solve(nums) {

    let oddElementsArray = nums.filter((el, index) => index % 2 !== 0)
        .map(n => n * 2)
        .reverse()
        .join(" ");

    return oddElementsArray;

}




solve([10, 15, 20, 25])