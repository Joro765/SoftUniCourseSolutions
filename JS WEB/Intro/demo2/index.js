const http = require("http");

const server = http.createServer((request, response) => {

    if (request.url == "/favicon.ico") {
        response.statusCode = 404;
        response.end();
    } else {
        response.write("Hello world!");
        response.end();
    }
})

server.listen(3000);
console.log("Server is listening on port 3000...");