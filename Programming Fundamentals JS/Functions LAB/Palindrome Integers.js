function palindromIntegers(nums) {


    for (let i = 0; i < nums.length; i++) {
        let currentNumStr = nums[i].toString();
        let reverseNumStr = currentNumStr.split("").reverse().join("");

        console.log(checkEqual(currentNumStr, reverseNumStr));
    }


    // Function to check if Equal
    function checkEqual(a, b) {
        if (a === b) {
            return "true";
        } else {
            return "false";
        }
    }

}

palindromIntegers([123, 323, 421, 121])