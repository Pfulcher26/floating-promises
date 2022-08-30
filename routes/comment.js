const express = require('express');
const router = express.Router();
const storyCtrl = require('../controllers/comment');

// comments
router.get('/:id', storyCtrl.commentDisplay);
router.post('/', storyCtrl.commentCreate);

module.exports = router;


