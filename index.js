const express = require("express");
const mongoose = require("mongoose");
const home = require("./src/home");
const app = express();

mongoose
  .connect("mongodb://localhost/music")
  .then(() => console.log("Connecting to the database..."))
  .catch(err => console.log(err));

app.use(express.json());
app.use("/db/home", home);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));


