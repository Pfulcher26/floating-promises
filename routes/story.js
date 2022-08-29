const express = require('express');
const router = express.Router();
const storyCtrl = require('../controllers/story');

router.get('/', storyCtrl.show);

module.exports = router;
