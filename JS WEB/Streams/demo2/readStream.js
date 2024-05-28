const fs = require("fs");


const readStream = fs.createReadStream("./data/data.html", { encoding: "utf-8", highWaterMark: 1000 });


readStream.on("data", (chunk) => {
    console.log("-------------------------");
    console.log(chunk);
})


readStream.on("close", () => {
    console.log("READ STREAM ENDED !!!");
})

