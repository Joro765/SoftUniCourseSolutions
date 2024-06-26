const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name should be at least 2 characters long!"],
        maxLength: [20, "Name cannot be more than 20 characters long!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        minLength: [10, "Email should be at least 10 characters long!"],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [4, "Password should be at least 4 characters long!"],
    }
})


userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;

})


const User = mongoose.model("User", userSchema);


module.exports = User;

