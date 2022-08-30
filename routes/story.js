const express = require('express');
const router = express.Router();
const storyCtrl = require('../controllers/story');

//stories
router.get('/', storyCtrl.show);
router.get('/new', storyCtrl.newStory);
router.post('/', storyCtrl.createStory);
//delete
router.delete('/:id', storyCtrl.deleteStory);
//edit
//display form
router.get('/edit/:id', storyCtrl.editStory);
//update content
router.put ('/edit/:id', storyCtrl.updateStory);


module.exports = router;
