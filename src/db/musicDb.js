const mongoose = require("mongoose");

const Music = mongoose.model(
  "Music",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 40,
      unique: true
    },
    albumId: {
      type: Number,
      required: true,
      min: 0
    },
    lyricist:{
        type: String,
        required: false,
        maxlength: 40
    }
  })
);

module.exports.Music = Music;
