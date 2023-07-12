function hardWords(data) {

    // Думите, които трябва да попълвам
    let words = data[1];

    // Текстът
    let text = data[0];

    // Винаги започваме от най-дългата дума, защото иначе ще вмести по кратка дума в по-дълъг слот
    words = words.sort((a, b) => b.length - a.length);

    for (const word of words) {
        let template = "_".repeat(word.length); // Правим теймплейт в който ще влезе думата

        // Докато има темплейт за тази дума да попълва
        while (text.includes(template)) {
            text = text.replace(template, word);
        }

    }

    console.log(text);

}




hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened.My dad bought me a sled.Mom started a new job as a __________.My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious.I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])