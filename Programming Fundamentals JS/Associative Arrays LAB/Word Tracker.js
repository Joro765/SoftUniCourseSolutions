function wordTracker(data) {

    let result = new Map();

    // Split first element of array
    let wordsNeeded = data.shift();

    // Convert the string to array
    wordsNeeded = wordsNeeded.split(" ");

    // Добавяме думите в мап-а със стойност 0 в случай, че не ни ги подадът, за да може да излезе 0 на конзолата
    for (const word of wordsNeeded) {
        result.set(word, 0);

    }

    for (const word of data) {
        // Check if current word matches
        if (wordsNeeded.includes(word)) {
            if (result.has(word)) {
                result.set(word, result.get(word) + 1);
            } else {
                result.set(word, 1);
            }
        }
    }

    // Sort
    let sortedArray = new Map([...result.entries()].sort((a, b) => b[1] - a[1]));

    // Print
    for (const [key, value] of sortedArray.entries()) {
        console.log(`${key} - ${value}`);

    }

}



wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task', 'the', 'sentence', 'sentence'
])