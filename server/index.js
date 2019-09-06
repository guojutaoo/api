const express = require("express");
const mongoose = require("mongoose");
const album = require("./src/album");
const music = require("./src/music");
const app = express();

mongoose
  .connect("mongodb://localhost/music", {useNewUrlParser: true })
  .then(() => console.log("Connecting to the database..."))
  .catch(err => console.log(err));
  mongoose.set('useCreateIndex', true)

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use("/album", album);
app.use("/music", music);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));


