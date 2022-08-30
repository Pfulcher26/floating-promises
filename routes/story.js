const express = require('express');
const router = express.Router();
const storyCtrl = require('../controllers/story');

//stories
router.get('/', storyCtrl.show);
router.get('/new', storyCtrl.newStory);
router.post('/', storyCtrl.createStory);

module.exports = router;
