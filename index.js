const express = require("express");
const {default : mongoose} = require("mongoose");

const app = express();

app.get('/', (req, res) => {
    res.status(200);
})

app.listen(3000, () => {
    console.log("app listening on port 3000");
})