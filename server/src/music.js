const express = require("express");
const { Music } = require("./db/musicDb");
const router = express.Router();

router.get("/", async (req, res) => {
  const musics = await Music.find().sort("musicId");
  res.send(musics);
});

router.post("/", async (req, res) => {
  let music = new Music({
    title: req.body.title,
    albumId: req.body.albumId,
    lyricist: req.body.lyricist
  });
  music = await music.save();
  res.send(music);
});

router.put("/:id", async (req, res) => {
  const music = await Music.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      albumId: req.body.albumId,
      lyricist: req.body.lyricist
    },
    { new: true }
  );
  if (!music)
    return res.status(404).send("The music with the given ID was not found.");
  res.send(music);
});

router.delete("/:id", async (req, res) => {
  const music = await Music.findByIdAndRemove(req.params.id);

  if (!music)
    return res.status(404).send("The music with the given ID was not found.");

  res.send(music);
});

router.get("/:id", async (req, res) => {
  const music = await Music.findById(req.params.id);

  if (!music)
    return res.status(404).send("The music with the given ID was not found.");

  res.send(music);
});

module.exports = router;
