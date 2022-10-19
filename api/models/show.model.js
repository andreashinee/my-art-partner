const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categories = require("../data/categories");

const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return "Url is not valid";
  }
};

const showSchema = new Schema(
  {
    title: {
      type: String,
      required: "The name of the show is required",
      trim: true,
      maxLength: [40, "The name of the show must be less than 40 characters"],
    },

    category: {
      type: String,
      required: "The category is required",
      trim: true,
      enum: categories.map((category) => category.value),
    },

    location: {
      type: String,
      required: "The location is required",
      trim: true,
      maxLength: [30, "The location must be less than 15 characters"],
    },

    city: {
      type: String,
      required: "The city is required",
      trim: true,
      maxLength: [30, "The city name must be less than 15 characters"],
    },

    date: {
      type: Date,
      required: "The date is required",
      trim: true,
    },

    duration: {
      type: Number,
    },

    picture: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      maxLength: [
        1000,
        "A little description please, we don't want to reed the bible :P",
      ],
    },

    price: {
      type: Number,
      trim: true,
      required: "The price is required",
      maxLength: 8,
    },

    url: {
      type: String,
      trim: true,
      required: "The url is required",
      validate: {
        validator: isURL,
        message: "Url is not valid",
      },
    },

    author: {
      type: String,
      trim: true,
    },

    attendees: {
      type: Number,
    },

    likes: {
      type: Number,
    },
  },

  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret._v;
        ret.id = ret._id;
        delete ret._id;

        return ret;
      },
    },
  }
);

const Show = mongoose.model("Show", showSchema);
module.exports = Show;
