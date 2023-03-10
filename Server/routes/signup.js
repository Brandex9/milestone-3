const express = require("express");
const signup = require("../models/signup");
const router = express.Router();

//ADD NEW
router.post("/signup", async (req, res) => {
  try {
    const signup = await new signup({
      ...req.body,
    }).save();

    res.send(signup);
  } catch (error) {
    res.status(500).json({ message: "Unable to add new User" });
    console.log(error);
  }
});
module.exports = router;
