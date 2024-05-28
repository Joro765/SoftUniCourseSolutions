const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

// Setup Handlebars
app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Static css and images
app.use(express.static("src/public"));



app.get("/", (req, res) => {
    res.render("home", { layout: false })
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})