function pianist(data) {

    let n = Number(data.shift());

    let obj = {};

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = data.shift().split("|"); // Добавям обекти и ги трия от масива
        obj[piece] = {
            composer,
            key
        }
    }


    while (data[0] != "Stop") {
        let tokens = data.shift().split("|");
        let task = tokens[0];
        let name = tokens[1];

        switch (task) {
            case "Add":
                if (obj[name]) {
                    console.log(`${name} is already in the collection!`);
                } else {
                    obj[name] = {
                        composer: tokens[2],
                        key: tokens[3]
                    }
                    console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
                }
                break;

            case "Remove":
                if (obj[name]) {
                    delete obj[name];
                    console.log(`Successfully removed ${name}!`);
                } else {
                    console.log(`Invalid operation! ${name} does not exist in the collection.`);
                }
                break;

            case "ChangeKey":
                if (obj[name]) {
                    obj[name].key = tokens[2];
                    console.log(`Changed the key of ${name} to ${tokens[2]}!`);
                } else {
                    console.log(`Invalid operation! ${name} does not exist in the collection.`);
                }
                break;
        }

    }


    for (const [name, values] of Object.entries(obj)) {

        console.log(`${name} -> Composer: ${values.composer}, Key: ${values.key}`);

    }

}


pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])