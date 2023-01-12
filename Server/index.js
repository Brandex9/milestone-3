const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const appRoutes = require("./routes");

app.use(cors());
//routes
appRoutes(app);

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

//db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 5000;
}
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
