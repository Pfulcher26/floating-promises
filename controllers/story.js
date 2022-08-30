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
        if (err) return res.redirect('/story');
        res.redirect('/story');
    });
}

function deleteStory(req, res){
    console.log(req.params.id)
    Story.deleteOne({ _id: `${req.params.id}`},function(err, tickets){
            res.redirect('/story');
    });
}


module.exports = {
    show,
    newStory,
    createStory,
    deleteStory
};