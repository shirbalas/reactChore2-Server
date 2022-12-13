const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
  cart: {
    totalQty: {
      type: Number,
      default: 0,
      required: true,
    },
    totalPrice: {
      type: Number,
      default: 0,
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        qty: {
          type: Number,
          default: 0,
        },
        price: {
          type: Number,
          default: 0,
        },
        title: {
          type: String,
        }
      },
    ],
  },
  firstName:{
    type: String,
  },
  lastName:{
    type: String,
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    required: 'Email address is required',
    require: true,
  },
  address:{
    type: String,
    required : "Please provide a shipping address",
    require : true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;