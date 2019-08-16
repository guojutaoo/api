const express = require("express");
const mongoose = require("mongoose");
const album = require("./src/album");
const music = require("./src/music");
const app = express();

mongoose
  .connect("mongodb://localhost/music")
  .then(() => console.log("Connecting to the database..."))
  .catch(err => console.log(err));

app.use(express.json());
app.use("/album", album);
app.use("/music", music);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));


