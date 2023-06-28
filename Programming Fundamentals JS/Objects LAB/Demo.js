let obj = {
    name: "Joro",
    age: 27
}

let obj2 = JSON.parse(JSON.stringify(obj));

obj.weight = 72;
obj.height = 172;
delete obj2.age;

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${obj[key]}`);

}