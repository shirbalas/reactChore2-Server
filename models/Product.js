const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photoURI: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
