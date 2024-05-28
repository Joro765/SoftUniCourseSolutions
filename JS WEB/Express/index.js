const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");


const cats = [
    {
        name: "Vasi",
        age: 7,
        breed: "persian"
    },
    {
        name: "Joro",
        age: 8,
        breed: "persian"
    }
]

const app = express();

// Сетъп за handlebars view/template engine
app.engine('handlebars', handlebars.engine());
app.set("view engine", "handlebars")

// Middleware, който проверява дали в рекуеста има статичен файл - снимка, css и тн. и ако има го връща автоматично.
app.use(express.static("public"));


// Мидълуер, който проверява рандом число.
app.get("/", (req, res) => {
    res.render("home", { name: "Home Page" }); // подаваме хоум вю, което се популира в main.handlebars. Винаги вика мейн с различно боди просто в случая хоум.
});




app.get("/cats", (req, res) => {
    res.render("cats", { cats })
});


// Теглене на картинка
app.get("/cats/download", (req, res) => {
    const imagePath = path.resolve("./public", "images", "cat.jpg");

    res.download(imagePath);
})


// Търсене по ид на котка
app.get("/cats/:catId", (req, res) => {
    const catId = req.params;

    res.send(catId.catId);
});



app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});