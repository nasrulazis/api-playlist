const express = require('express');
const playlistController = require('../controllers/playlistController');

const router = express.Router();

router.get('/', playlistController.getAll);
router.get('/mostplayed', playlistController.getMostPlayed);
router.get('/:id', playlistController.getSong);
router.put('/:id', playlistController.play);
router.post('/', playlistController.create);

module.exports = router;