const express = require("express");
// const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const login = require("./routes/login");
const signup = require("./routes/signup");
const { createApi } = require("unsplash-js");

app.use(cors());
app.use(express.static(path.resolve(__dirname, "../Client/build")));
app.use(express.static("public"));

// ROOT
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

//routes
app.use("/", login);
app.use("/", signup);

// Api call Unsplash

// const unsplash = createApi({
//  accessKey: process.env.KEY,
// });

//unsplash.photos.get(
// { query: "house", page: 1, perPage: 10, orientation: "portrait" },
// `fetch` options to be sent only with _this_ request
//   { headers: { "X-Custom-Header-2": "bar" } }
// );

//db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

let PORT = process.env.PORT;

app.listen(PORT, "localhost", () => console.log(`listening on port ${PORT}`));
