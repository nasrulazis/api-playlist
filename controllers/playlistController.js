const playlistService = require('../services/playlistService');

const getAll = (req, res) => {
  const data = playlistService.getAll();

  res.json({ data });
};

const getSong = (req, res) => {
  const data = playlistService.getSong(req.params.id);

  res.json({ data });
};

const play = (req,res)=>{
  const data = playlistService.play(req.params.id);

  res.json({ data });
};

const getMostPlayed = (req, res) => {
  const data = playlistService.getMostPlayed();

  res.json({ data });
};

const create = (req, res) => {
  try {
    const { title, artist, album } = req.body;

    if (!title || !artist|| !album) {
      throw new Error('Insufficient paramater');
    }

    const data = playlistService.create(title, artist, album);

    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getAll,
  create,
  getSong,
  play,
  getMostPlayed
};