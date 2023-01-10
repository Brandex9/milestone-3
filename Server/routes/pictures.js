import express from "express";

const pictures = express.Router();

// GET /route1/foo
router.get("/", (req, res) => {
  res.send("OK");
});

export default pictures;
