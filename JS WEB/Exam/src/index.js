const express = require("express");
const mongoose = require("mongoose");
const handlebars = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(auth);

app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));



app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(routes);


// TODO: change DB name
mongoose.connect("mongodb://localhost:27017/homeCooking")
    .then(() => {
        console.log("DB Connected!");

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    }).catch(err => console.log("Cannot connect to DB"));