const express = require('express');
const router = express.Router();
const storyCtrl = require('../controllers/story');

router.get('/', storyCtrl.show);
router.get('/new', storyCtrl.newStory);
router.post('/', storyCtrl.createStory);
router.get('/:id', storyCtrl.commentDisplay);

module.exports = router;
