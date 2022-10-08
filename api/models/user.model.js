const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(

  {
    name: {
      type: String,
      required: "The name of the show is required",
      trim: true,
      maxLength: [10, "The name must be less than 40 characters"],
    },

    city: {
      type: String,
      required: "The location is required",
      trim: true,
    },

   age: {
      type: Number,
      required: "The age is required",
      trim: true,
      maxLength: [2, "This website is only for humans :)"],
    },

    about: {
      type: String,
      trim: true,
      maxLength: [200, "We don't want to read the bible"],
    },
    

    alterego: {
      type: String,
      required: "The name of the show is required",
      trim: true,
      maxLength: [10, "The name of your alterego must be less than 40 characters"],
    },

    repertoire: {
      type: String,
      required: "The category is required",
      trim: true,
      maxLength: [50, "Write here your most favorites only"],
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
      required: "The name of your favourite book",
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
