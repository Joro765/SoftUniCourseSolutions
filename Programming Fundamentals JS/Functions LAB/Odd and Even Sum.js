function oddEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;

    // Function to transform number to string to array
    function turnIntoArr(num) {
        let numString = String(num);
        return numString.split("");

    }

    let numArray = turnIntoArr(num); // Invoke turnIntoArr function and save into variable the Array
    loopArr(numArray);      // Invoke loopArray function to loop throught the array
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);  // Print result



    // Function to loop throught the array
    function loopArr(numArray) {
        let current;
        for (let i = 0; i < numArray.length; i++) {
            current = Number(numArray[i]);
            if (current % 2 === 0) {
                evenSum += current;
            } else {
                oddSum += current;
            }
        }
    }

}


oddEvenSum(1000435);