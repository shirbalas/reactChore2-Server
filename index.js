const { response } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/Product");
const cors = require('cors');

const app = express();

app.use(cors({origin:'*'}));

mongoose.connect("mongodb+srv://108user:108password@cluster0.hmdji17.mongodb.net/ReactChore2?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    });


app.get('/', (req, res) => {
    res.status(200);
});

app.get('/all', async (req, res) => {
    try {
        const products = await Product.find({});
        console.log({ products });
        res.status(200).send({ products });
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

app.listen(3005, () => {
    console.log("app listening on port 3005");
});