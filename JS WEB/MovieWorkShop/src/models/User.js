const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,    // index за по-бързо търсене и не позволява 2 еднакви мейла в базата !!!
        match: [/[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/, "Invalid email!"], // проверка за валиден имейл !!!
        minLength: [10, "Email should be at least 10 characters long!"]
    },
    password: {
        type: String,
        required: true,
        match: [/[a-zA-Z0-9]+/, "Password cannot include symbols"],
        minLength: [6, "Password should be at least 6 characters long!"]
    }
})


// Хешираме паролата ПРЕДИ да я запазим в базата. За да може да запазим хем вместо плейн текст паролата
userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;

})


const User = mongoose.model("User", userSchema);

module.exports = User;