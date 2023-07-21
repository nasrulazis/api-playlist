const { v4: uuidv4 } = require('uuid');

let playlist = [];

class Playlist {
  constructor(title, artist, album) {
    this.id = uuidv4();
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.countPlay = 0;
  }
}

const getAll = () => {
  return playlist;
};


const get = (playlistId) => {
  return playlist.find((playlist) => playlist.id === playlistId);
};

const getMostPlayed = () => {
  const sortedPlaylist =  playlist.sort((a,b)=>{
    return b.countPlay - a.countPlay;
  });
  return sortedPlaylist;
};

const play = (playlistId)=>{
  const playlistToUpdate = playlist.find((playlist) => playlist.id === playlistId);
  if (!playlistToUpdate) {
    return res.status(404).json({ error: 'User not found' });
  }
  playlistToUpdate.countPlay+=1;
  return playlistToUpdate;
};

const create = (title, artist, album) => {
  let newPlaylist = new Playlist(title, artist, album);

  playlist.push(newPlaylist);

  return newPlaylist;
};

module.exports = {
  getAll,
  get,
  create,
  play,
  getMostPlayed,
};