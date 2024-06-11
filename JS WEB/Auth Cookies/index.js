const express = require("express");
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.urlencoded({ extended: false })); // Middleware за да се прочита бодито на рекуеста при пост заявка
app.use(cookieParser()); // Middleware за кукита



app.get("/", (req, res) => {
    const user = req.cookies['user']; // прочитане на куки с име "user"

    if (user) {
        res.send(`<h1>Hello ${user}</h1>`)
    }

    res.send("Please login");
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
    res.cookie("user", req.body.username);  // създаване на куки с име user
    res.redirect("/");
    res.end();

})

app.get("/logout", (req, res) => {
    res.clearCookie("user"); // маха куки
    res.redirect("/");
    res.end();
})




app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});