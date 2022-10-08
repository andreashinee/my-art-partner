const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
      maxLength: [15, "The category must be less than 15 characters"],
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
      required: "The url is required",
    },

    author: {
      type: String,
      required: "The author is required",
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
