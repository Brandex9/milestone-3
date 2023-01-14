const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//schema fields
const loginSchema = new Schema(
  {
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

module.exports = mongoose.model("Login", loginSchema);
