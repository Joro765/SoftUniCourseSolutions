const messageBroker = require("./messageBroker");

messageBroker.subscribe("request", add);



function add(data) {
    console.log(`Report: ` + data);
}


module.exports = {
    add
}