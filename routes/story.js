const express = require('express');
const router = express.Router();
const storyCtrl = require('../controllers/story');

router.get('/', storyCtrl.show);
router.get('/new', storyCtrl.newStory);

module.exports = router;
