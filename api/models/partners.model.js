const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const partnerSchema = new Schema(
  {
    title: {
      type: String,
      required: "The name of the show is required",
      trim: true,
      maxLength: [40, "The name of the show must be less than 40 characters"],
    },

    location: {
      type: String,
      required: "The location is required",
      trim: true,
    },

    city: {
      type: String,
      required: "The city is required",
      trim: true,
    },

    date: {
      type: Date,
      required: "The date is required",
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      maxLength: [200, "The name of the show must be less than 200 characters"],
    },

    price: {
      type: String,
      trim: true,
      required: "The price is required",
    },

    url: {
      type: String,
      trim: true,
      required: "The price is required",
    },

    author: {
      type: String,
      required: "The name of the show is required",
      trim: true,
    },
  },
  { timestamps: true }
);

const Partner = mongoose.model("Stream", partnerSchema);
module.exports = Partner;
