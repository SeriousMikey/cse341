const router = require("express").Router();
router.use("/users", require("./users"));


// Shows the home page
router.get("/", (req, res) => { res.send("Hello World")});


module.exports = router;