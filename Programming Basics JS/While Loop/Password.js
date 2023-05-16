// function password(input) {
//     let user = input[0];
//     let password = input[1];

//     let data = input[2];
//     let index = 3;

//     while (data !== password) {
//         data = input[index];
//         index++;
//     }

//     console.log(`Welcome ${user}!`);
// }

function password(input) {
    let index = 0;

    let user = input[index];
    index++
    let pass = input[index];
    index++

    let tempPass = input[index];
    index++

    while (tempPass !== pass) {
        tempPass = input[index]
        index++
    }

    console.log("Welcome");
}



password(["Nakov",

    "1234",

    "Pass",

    "1324",

    "1234"])