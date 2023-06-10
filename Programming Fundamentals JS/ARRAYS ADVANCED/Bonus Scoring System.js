function bonusScoringSystem(data) {
    let index = 0;
    let studentsCount = Number(data.shift(index));
    index++;

    let lecturesCount = Number(data.shift(index));
    index++;

    let additionalBonus = Number(data.shift(index));
    index++;

    let mostAttended = 0;

    for (let i = 0; i < studentsCount; i++) {
        let lecturesAttended = Number(data[i]);

        if (lecturesAttended > mostAttended) {
            mostAttended = lecturesAttended;
        }
    }

    let bonus = (mostAttended / lecturesCount) * (5 + additionalBonus);

    console.log(`Max Bonus: ${Math.round(bonus)}.`);
    console.log(`The student has attended ${mostAttended} lectures.`);
}


bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20'])


// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})

// "Max Bonus: {max bonus points}."
// "The student has attended {student attendances} lectures."
