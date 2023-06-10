const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  people: {
    adult: {
      type: Number,
      required: true,
    },
    child: {
      type: Number,
      required: true,
    },
  },
  appromixatelyDate: {
    type: String,
    required: true,
  },
  package: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  info: {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
