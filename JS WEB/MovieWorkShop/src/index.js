const express = require("express");
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



// Static css and images
app.use(express.static("src/public"));



// Call router from routes.js
app.use(routes);



// Start Server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})