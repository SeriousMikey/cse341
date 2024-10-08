const express = require("express");
const mongodb = require("./data/database");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

// Use body parser
app.use(bodyParser.json());

// Swagger
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Acces-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Index route
app.use("/", require("./routes"));

// Initialize the database
mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});
    }
});