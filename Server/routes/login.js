const express = require("express");
const Login = require("../models/login");
const router = express.Router();

//GET SPECIFIC
router.get("/login/:id", (req, res) => {
  try {
    let foundlogin = Login.findById(req.params.id);
    res.status(200).send("found");
  } catch (error) {
    res.status(500).json({ message: "Error Retreiving Login" });
    console.log(error);
  }
});

module.exports = router;
