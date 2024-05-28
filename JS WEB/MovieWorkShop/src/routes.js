const express = require("express");
const router = express.Router();

// Импортваме всички контролери
const homeController = require("./controllers/homeController");
const aboutController = require("./controllers/aboutController");
const movieController = require("./controllers/movieController");

// Викаме всички раутове от контролери за да се капсулират в един раутър и него го подаваме в app.js
router.use(homeController);
router.use(aboutController);
router.use(movieController);


module.exports = router;