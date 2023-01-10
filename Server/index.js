const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

import pictures from "./routes/pictures";
app.use("/", pictures);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
