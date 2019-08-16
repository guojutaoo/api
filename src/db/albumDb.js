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
        min: 0,
        max: 10
    },
    year:{
        type: Number,
        required: false,
        min: 0,
        max: 2500
    },
    albumId:{
        type: Number,
        required: true,
        unique: true,
        min: 0
    }
  })
);

module.exports.Album = Album;
