const fs = require("fs/promises");


fs.readdir("./folder", "utf-8")
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log("There is an error with the file system!");
    })