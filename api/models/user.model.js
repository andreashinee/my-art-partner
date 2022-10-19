const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categories = require("../data/categories");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "The name of the show is required",
      trim: true,
      maxLength: [20, "The name must be less than 20 characters"],
    },

    city: {
      type: String,
      required: "The location is required",
      trim: true,
      maxLength: [20, "The name of your city must be less than 20 characters"],
    },

    age: {
      type: Number,
      required: "The age is required",
      trim: true,
      maxLength: [2, "This website is only for humans :)"],
    },

    description: {
      type: String,
      trim: true,
      maxLength: [500, "We don't want to read the bible"],
    },

    alterego: {
      type: String,
      required: "The name of the your alterego is required",
      trim: true,
      maxLength: [
        20,
        "The name of your alterego must be less than 40 characters",
      ],
    },

    category: {
      type: String,
      required: "The category is required",
      trim: true,
      enum: categories.map((category) => category.value),
    },

    band: {
      type: String,
      required: "The name of your favourite band or singuer is required",
      trim: true,
      maxLength: [20, "only one!"],
    },

    song: {
      type: String,
      required: "The name of your favourite song is required",
      trim: true,
      maxLength: [20, "only one!"],
    },

    book: {
      type: String,
      required: "The name of your favourite book is required",
      trim: true,
      maxLength: [20, "only one!"],
    },

    ilustrator: {
      type: String,
      required: "The name of your favourite ilustrator",
      trim: true,
      maxLength: [20, "only one!"],
    },

    picture: {
      type: String,
      trim: true,
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

const User = mongoose.model("User", userSchema);
module.exports = User;
