const Playlist = require('../models/playlist');

const getAll = () => {
    return Playlist.getAll();
};

const getSong = (songId)=>{
    return Playlist.get(songId);
}

const play = (songId)=>{
    return Playlist.play(songId);
}

const getMostPlayed = () => {
    return Playlist.getMostPlayed();
};

const create = (title, artist, album) => {
    const playlist = Playlist.create(title, artist, album);

    return playlist;
};

module.exports = {
    getAll,
    create,
    getSong,
    play,
    getMostPlayed,
};