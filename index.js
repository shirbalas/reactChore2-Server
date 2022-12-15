const { response } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/Product");
const cors = require("cors");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.use(cors({ origin: "*" }));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://108user:108password@cluster0.hmdji17.mongodb.net/ReactChore2?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("mongo connection open!!");
  })
  .catch((err) => {
    console.log("no connection start");
  });

app.use("/", indexRouter);

app.listen(3005, () => {
  console.log("app listening on port 3005");
});
