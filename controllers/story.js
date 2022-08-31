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
    if(req.body.user){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        const story = new Story(req.body);
        story.save(function(err) {
            if (err) return res.redirect('/story');
            res.redirect('/story');
        });
    } else {
        const story = new Story(req.body);
        story.save(function(err) {
            if (err) return res.redirect('/story');
            res.redirect('/story');
        });
    }
}

function deleteStory(req, res){
    Story.findByIdAndRemove(req.params.id, function(err, story){
            res.redirect('/story');
    });
}

function editStory(req,res){
    Story.findById(req.params.id, function(err, story){
        res.render('story/edit', {story});
    });
}

function updateStory(req,res){
    Story.findByIdAndUpdate(req.params.id, req.body, function(err, story){
        res.redirect('/story');
    });
}


module.exports = {
    show,
    newStory,
    createStory,
    deleteStory,
    editStory,
    updateStory
};