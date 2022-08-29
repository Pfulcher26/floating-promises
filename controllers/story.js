const Story = require('../models/stories');
const User = require('../models/user');

function show(req, res){
    Story.find({}, function(err, stories) {
        res.render('story/index', { stories });
    });
}

function newStory(req, res){
    res.render('story/new')
}

function createStory(req, res){
    const story = new Story(req.body);
    story.save(function(err) {
        if (err) return res.redirect('story/index');
        res.redirect('story/index');
    });
}


module.exports = {
    show,
    newStory,
    createStory,
};