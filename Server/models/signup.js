const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//schema fields
const signupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//EXPORT

module.exports = mongoose.model("signup", signupSchema);
