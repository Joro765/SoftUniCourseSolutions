const express = require("express");
const router = express.Router();


router.get("/cast/create", (req, res) => {
    res.render("cast-create");
});


module.exports = router;