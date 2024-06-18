const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


// Хешираме паролата ПРЕДИ да я запазим в базата. За да може да запазим хем вместо плейн текст паролата
userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;

})


const User = mongoose.model("User", userSchema);

module.exports = User;