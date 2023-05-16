function searchBooks(input) {
    let index = 0;
    let desiredBook = input[index];
    index++;
    let booksChecked = 0;
    let found = false;
    let booksFinished = false;

    while (true) {
        let currentBook = input[index];
        index++;

        if (currentBook === "No More Books") {
            booksFinished = true;
            break;
        }

        if (currentBook !== desiredBook) {
            booksChecked++
        }
        if (currentBook === desiredBook) {
            found = true;
            break;
        }

        currentBook = input[index];
    }


    if (found === true) {
        console.log(`You checked ${booksChecked} books and found it.`);
    }
    if (booksFinished === true) {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}


searchBooks(["Bourne",

    "True Story",

    "Forever",

    "More Space",

    "The Girl",

    "Spaceship",

    "Strongest",

    "Profit",

    "Tripple",

    "Stella",

    "The Matrix",

    "Bourne"])