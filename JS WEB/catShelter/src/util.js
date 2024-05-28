const fs = require("fs");
const path = require("path");

// Read files from backEnd

function readFile(filePath) {
    const data = fs.readFileSync("." + filePath);
    return data.toString();
}


module.exports = {
    readFile
};