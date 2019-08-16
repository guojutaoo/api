const mongoose = require("mongoose");

const Album = mongoose.model(
  'Album',
  new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 40
    },
    rating:{
        type: Number,
        required: false,
        minlength: 1,
        maxlength: 2
    },
    year:{
        type: Number,
        required: false,
        minlength: 1,
        maxlength: 4
    }
  })
);

module.exports.Album = Album;
