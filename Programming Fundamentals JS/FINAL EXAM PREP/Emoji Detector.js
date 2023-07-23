function emojiDetector(data) {

    let pattern = /([*|:]{2})(?<emote>[A-Z]*[a-z]{2,20})\1/gm

    let patternForScore = /(?<num>\d)/gm

    let totalScore = 1;
    let validEmojies = 0;

    let matchScore = patternForScore.exec(data);

    while (matchScore) {

        totalScore *= Number(matchScore.groups.num);

        matchScore = patternForScore.exec(data);
    }


    // Object to store emotes
    let emotes = {};

    // First match
    let match = pattern.exec(data);


    // While there is a match
    while (match) {
        let score = 0;
        let emote;
        validEmojies++;


        emote = match[0];
        let sim = emote.substring(0, 1);
        emote = match.groups.emote

        for (let i = 0; i < emote.length; i++) {
            score += emote.charCodeAt(i);
        }

        if (score >= totalScore) {
            emote = sim + sim + emote + sim + sim;
            emotes[emote] = score;
        }

        // New match
        match = pattern.exec(data);
    }

    console.log(`Cool threshold: ${totalScore}`);
    console.log(`${validEmojies} emojis found in the text. The cool ones are:`);
    for (const element of Object.entries(emotes)) {
        console.log(element[0]);
    }
}





emojiDetector("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")