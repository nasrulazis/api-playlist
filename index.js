const express = require('express');

const playlistRoutes = require('./routes/playlistRoute');

const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/playlist', playlistRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));