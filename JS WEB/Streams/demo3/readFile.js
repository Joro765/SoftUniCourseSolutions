const fs = require("fs");


fs.readFile("data.txt", { encoding: "utf-8" }, (err, data) => printData(err, data))



function printData(err, data) {
    if (err) {
        console.log("Error while reading file!");
        return;
    }
    console.log(data);
}




