function solve() {

    let person = {
        name: "Joro",
        age: 27,
        job: "Web Dev",
        height: 172,
        weight: 72
    }

    for (const key of Object.keys(person)) {
        console.log(`${key} -> ${person[key]}`);
    }
}


solve()