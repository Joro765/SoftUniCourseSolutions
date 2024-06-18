const express = require("express");
const router = express.Router();

// Импортваме всички контролери
const homeController = require("./controllers/homeController");
const aboutController = require("./controllers/aboutController");
const movieController = require("./controllers/movieController");
const wildCardController = require("./controllers/wildCardController");
const detailsController = require("./controllers/detailsController");
const castController = require("./controllers/castController");
const loginController = require("./controllers/loginController");
const registerController = require("./controllers/registerController");

// Викаме всички раутове от контролери за да се капсулират в един раутър и него го подаваме в app.js
router.use(homeController);
router.use(aboutController);
router.use(movieController);
router.use(detailsController);
router.use(castController);
router.use(loginController);
router.use(registerController);
router.use(wildCardController); // Винаги най-отдолу понеже иначе ще override-не съществуващи пътища.


module.exports = router;