const mongoose = require("mongoose");

function getErrorMsg(error) {
    if (error instanceof mongoose.MongooseError) {
        return Object.values(error.errors)[0].message;
    } else if (error instanceof Error) {
        return error.message;
    }
}


module.exports = getErrorMsg;