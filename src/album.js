const express = require("express");
const { Album } = require("./db/albumDb");
const router = express.Router();

router.get("/", async (req, res) => {
  const albums = await Album.find().sort("year");
  console.log(albums);
  res.send(albums);
});

router.post("/", async (req, res) => {
  let album = new Album({
    title: req.body.title,
    rating: req.body.rating,
    year: req.body.year
  });
  album = await album.save();
  res.send(album);
});

router.put("/:id", async (req, res) => {
  const album = await Album.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      rating: req.body.rating,
      year: req.body.year
    },
    { new: true }
  );
  if (!album)
    return res
      .status(404)
      .send("The album with the given ID was not found.");

  res.send(customer);
});

router.delete("/:id", async (req, res) => {
    const album = await Album.findByIdAndRemove(req.params.id);
  
    if (!album)
      return res
        .status(404)
        .send("The album with the given ID was not found.");
  
    res.send(album);
  });
  
  router.get("/:id", async (req, res) => {
    const album = await Album.findById(req.params.id);
  
    if (!album)
      return res
        .status(404)
        .send("The album with the given ID was not found.");
  
    res.send(album);
  });

module.exports = router;
