const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//schema fields
const loginSchema = new Schema(
  {
    name: {
      type: String,
      //required: true,
    },
    password: {
      type: String,
    },
    hint: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//EXPORT

module.exports = mongoose.model("Login", loginSchema);
