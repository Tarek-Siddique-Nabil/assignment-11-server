const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    road: {
      type: String,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  spendingTime: {
    day: {
      type: Number,
      required: true,
    },
    night: {
      type: Number,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
