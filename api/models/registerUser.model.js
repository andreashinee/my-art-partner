const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const PASSWORD_PATTERN = /^.{8,}$/;
const WORK_FACTOR = 10;

const registerUserSchema = new Schema(
  {
    name: {
      type: String,
      required: "The name of the show is required",
      trim: true,
    },

    email: {
      type: String,
      required: "The mail is required",
      trim: true,
      lowercase: true,
      unique: true,
      match: [EMAIL_PATTERN, 'invalid mail']
    },

    password: {
      type: String,
      required: "Password is required",
      trim: true,
      lowercase: true,
      unique: true,
      match: [PASSWORD_PATTERN, 'Password needs at least 8 chars']
    },
  }, 
  {
    timestamps: true
  }
  
  );

  registerUserSchema.pre('save', function (next){
    if (this.isModified('password')) {
      bcrypt.hash(this.password, WORK_FACTOR)
      .then(hash => {
        this.password = hash;
        next();
      })
    }else {
      next();
    }
  });

  registerUserSchema.methods.checkPassword = function (passwordToMatch){
    return bcrypt.compare(passwordToMatch, this.password)
  }

const User = mongoose.model('RegisterUser', registerUserSchema);

module.exports = RegisterUser;
 

