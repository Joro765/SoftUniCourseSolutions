const express = require("express");
const router = express.Router();

const homeController = require("./controllers/homeController");
const registerController = require("./controllers/registerController");
const loginController = require("./controllers/loginController");
const recipeController = require("./controllers/recipeController");
const wildCardController = require("./controllers/wildCardController");


router.use(homeController);
router.use(registerController);
router.use(loginController);
router.use(recipeController);
router.use(wildCardController);




module.exports = router;