const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/story');

router.get('/', storyCtrl.show);

module.exports = router;
