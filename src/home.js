const express = require("express");
const { Album } = require("./db/album");
const router = express.Router();

router.get("/", async (req, res) => {
  const albums = await Album.find();
  console.log(123)
  console.log(albums)
  res.send(albums);
});
// router.get("/", async (req, res) => {
//     const customers = await Album.find().sort("name");
//       console.log(123)
//   console.log(customers)
//     res.send(customers);
//   });

module.exports = router;
