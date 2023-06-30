function schoolGrades(data) {

    let obj = {};

    // Add info to object
    for (const info of data) {
        let studentInfo = info.split(" ");
        let name = studentInfo.shift(); // Get name of student
        let grades = studentInfo.map(Number); // Get grades of student

        if (!(obj.hasOwnProperty(name))) {
            obj[name] = grades;
        } else {
            grades.forEach(el => { obj[name].push(el) }); // Push grades into array of object
        }
    }


    // Sort students by name
    let sortedArray = Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));




    // Print students. Iterate over sortedArray and call avg grade function
    for (const [key, value] of sortedArray) {
        let student = key;
        let grades = value;

        console.log(`${student}: ${avgGrade(grades).toFixed(2)}`);

    }



    // Calculate avg grade. Pass array of grades and returns avg grade
    function avgGrade(arr) {
        length = arr.length;
        let sum = 0

        for (const grade of arr) {
            sum += grade;
        }
        return sum / length;
    }

}


schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])