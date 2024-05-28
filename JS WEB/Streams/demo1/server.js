const http = require("http");
const messageBroker = require("./messageBroker");


require("./logger");
require("./reportingService");


http.createServer((req, res) => {

    messageBroker.publish("request", `URL: ${req.url} METHOD: ${req.method}`);

    res.end();

}).listen(3000);