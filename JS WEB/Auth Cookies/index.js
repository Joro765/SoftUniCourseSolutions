const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false })); // за да се прочита бодито на рекуеста при пост заявка



app.get("/", (req, res) => {
    const userInfo = req.headers["cookie"];

    if (userInfo) {
        res.send(`Hello ${userInfo.split("=")[1]}`);
    } else {
        res.send("Please login");
    }
})

app.get("/login", (req, res) => {
    res.send(`
    <form action="/login" method="post">
        <label>Username</label>
        <input type="text" name="username">
        <label>Password</label>
        <input type="password" name="password">
        <input type="submit" value="login">
    </form>
    `)
})


app.post("/login", (req, res) => {
    console.log(req.body);

    res.header("Set-Cookie", `userInfo=${req.body.username}`); // add cookie
    res.redirect("/");
    res.end();
})




app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});