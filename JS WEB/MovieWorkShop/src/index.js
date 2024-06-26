const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { auth } = require("./middlewares/authMiddleware");

const handlebars = require("express-handlebars");
const path = require("path");
const routes = require("./routes");

const app = express();
const port = 3000;

// Setup Handlebars
app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));



// Static css and images - Express Middlewares
app.use(express.static("src/public")); // Middleware за прочитане на всички статични файлове - css/ image etc.
app.use(express.urlencoded({ extended: false })); // Middleware За прочитане на данни идващи от сървъра. Примерно от форма.
app.use(cookieParser()); // Middleware, който да праща куки на всеки рекуест
app.use(auth);  // проверява на всяка заявка дали има юзър - req.user - 


// Call router from routes.js
app.use(routes);


// Connect to DB and then start Server
mongoose.connect("mongodb://localhost:27017/magic-movies")
    .then(() => {
        console.log("DB Connected!");
        // Start Server
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    }).catch(err => console.log("Cannot connect to DB"));




